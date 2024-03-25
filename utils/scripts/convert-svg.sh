#!/bin/bash

# This script is used to convert SVG files to TSX files to be used as Icons in our system

# Function to convert kebab case to camel case
camelize() {
    echo "$1" | awk 'BEGIN {FS="[-_]"} {for (i=1; i<=NF; i++) printf (i==1 ? $i : toupper(substr($i,1,1)) tolower(substr($i,2))); printf "\n"}'
}

# Function to replace special characters with "-"
replace_special_chars() {
    echo "$1" | sed 's/[^a-zA-Z0-9]/-/g'
}

capitalize_first_letter() {
    local string="$1"
    echo "$string" | awk '{print toupper(substr($0,1,1)) tolower(substr($0,2))}'
}

convert_file_name() {
    local file_name="$1"
    local converted_file_name=$(replace_special_chars "$file_name")
    converted_file_name=$(echo "$converted_file_name" | tr '[:upper:]' '[:lower:]')
    converted_file_name=$(capitalize_first_letter "$converted_file_name")
    converted_file_name=$(camelize "$converted_file_name")
    echo "$converted_file_name"
}

replace_stroke_width() {
    local content="$1"
    local temp_content=$(echo "$content" | sed 's/strokeWidth/strokeTemp/g')
    echo "$temp_content"
}

# Function to replace fill attribute with fill={fill}
replace_fill_attribute() {
    local content="$1"
    local temp_content=$(echo "$content" | sed 's/fill\s*=\s*"[^"]*"/fill={fill}/g')
    echo "$temp_content"
}

# Function to replace stroke attribute with stroke={stroke}
replace_stroke_attribute() {
    local content="$1"
    local temp_content=$(echo "$content" | sed 's/stroke\s*=\s*"[^"]*"/stroke={stroke}/g')
    echo "$temp_content"
}

# Function to update files in a directory
update_files() {
    local directory_path=$1
    
    # Iterate over files in the directory
    for file in "$directory_path"/*.svg; do
        # Check if the file exists and is a regular file
        if [ -f "$file" ]; then

            # Get the file name without spaces and swap the extension to .tsx
            base_file_name=$(basename "$file" .svg)
            echo "Processing: $base_file_name"
        
            converted_file_name=$(convert_file_name "$base_file_name")
            final_file_name="$converted_file_name.tsx"
            echo "Converted file name: $final_file_name"
            
            # Set the new file path
            new_file_path="$directory_path/$final_file_name"

            # Check if the corresponding .tsx file already exists
            if [ -f "$new_file_path" ]; then
                echo "Skipping $file_name_no_spaces as it already exists"
                continue
            fi

            # Read the content of the file
            content=$(<"$file")

            # Replace kebab case with camel case in content
            temp_content=$(camelize "$content")

            # Replace fill attribute with fill={fill}
            temp_content=$(replace_fill_attribute "$temp_content")

            # Replace stroke attribute with stroke={stroke}
            temp_content=$(replace_stroke_attribute "$temp_content")

            # Wrap content with React component structure
            new_content="export default ({ stroke, fill }: { stroke: string, fill: string }) => (\n$temp_content\n);"

            # Write the updated content to a new tsx file in the updated directory
            echo "$new_content" > "$new_file_path"

            # Delete the original SVG file
            rm "$file"

            echo "\nUpdated: $new_file_path"
            echo "Original: $file (deleted)"
        fi
    done
    echo "\nDone"
}

echo "Converting SVG files to TSX..."
echo "Directory path: $1 \n"

# Check if a directory path is provided as a parameter
if [ $# -eq 0 ]; then
    echo "Error: Directory path is required"
    echo "Usage: npm run convert_svg <directory_path> \n"
    exit 1
fi

# The first parameter is the directory path
update_files "$1"
