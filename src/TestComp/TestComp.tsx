import { Box } from "@mui/material";
import cx from "classnames";
import {
  Children,
  cloneElement,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { Typography } from "..";
import { TestCompProps } from "./TestComp.types";

const OverflowCounter = ({ children, onOverflow }: any) => {
  const refs = useRef<any>({});

  useEffect(() => {
    if (!onOverflow) return;
    let overflowCount = 0;

    Children.forEach(children, (child: any, idx: number) => {
      if (child?.type?.displayName === "__Item__") {
        const domNode = refs.current[idx];
        if (!domNode) return;
        const parent = domNode.parentElement.getBoundingClientRect();
        const rect = domNode.getBoundingClientRect();

        if (rect.right > parent.right) {
          overflowCount++;
        }
      }
    });

    console.log("__overflowCount:", overflowCount);
    onOverflow(overflowCount);
  }, [children, onOverflow]);

  return (
    <>
      {Children.map(children, (element, idx) => {
        if (!element) return null;
        return cloneElement(element, {
          ref: (ref) => (refs.current[idx] = ref),
        });
      })}
    </>
  );
};

const Item = forwardRef(({ hidden, option }: any, ref: any) => {
  return (
    <Box
      id={hidden ? `${option}--hidden` : option}
      // ref={(r) => detectOverflow(r, option)}
      ref={ref}
      sx={{
        height: "40px",
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        whiteSpace: "nowrap",
        borderRadius: "40px",
      }}
    >
      {option}
    </Box>
  );
});

Item.displayName = "__Item__";

const TestComp = ({ id, className, options }: any) => {
  const [selectedOptions, setSelectedOptions] = useState<any>([]);
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Box
        id={id}
        className={cx("TestComp", {
          [className]: className,
        })}
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            opacity: 0,
            // height: 200,
            width: 300,
            backgroundColor: "rgba(255, 0, 255, 0.4)",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: "8px",
            // position: "relative",
            overflow: "hidden",
            // background: "red",
          }}
          data-testid="TestComp"
        >
          <OverflowCounter onOverflow={setCount}>
            {count > 0 ? (
              <Box
                sx={{
                  height: "22px",
                  width: "fit-content",
                  display: "flex",
                  alignItems: "center",
                  background: "black",
                  // position: "absolute",
                  right: "8px",
                  padding: "8px",
                  borderRadius: "40px",
                  flexShrink: 0,
                  mr: 1,
                }}
              >
                <Typography variant="bodyXS" color="white">
                  +{count}
                </Typography>
              </Box>
            ) : null}
            {selectedOptions?.map((option) => (
              <Item key={`${option}--hidden`} option={option} />
            ))}
          </OverflowCounter>
        </Box>
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            background: "rgba(255, 0, 255, 0.4)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
            overflow: "hidden",
          }}
        >
          {selectedOptions?.map((option, i) => {
            console.log("\n\n------------");
            console.log("i:", i);
            console.log("selectedOptions.length:", selectedOptions.length - 1);
            console.log("count:", count);
            console.log("------------\n\n");

            if (i > selectedOptions.length - 1 - count) return null;
            return <Item key={option} option={option} />;
          })}
          {count > 0 && (
            <Box
              sx={{
                height: "22px",
                width: "fit-content",
                display: "flex",
                alignItems: "center",
                background: "black",
                padding: "8px",
                borderRadius: "40px",
                flexShrink: 0,
                mr: 1,
                position: "absolute",
                right: 16,
              }}
            >
              <Typography variant="bodyXS" color="white">
                +{count}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>

      <Box>
        {options.map((option) => (
          <Box
            key={option.value}
            onClick={() => {
              setSelectedOptions((prev: any) => {
                if (prev.includes(option.value)) {
                  return prev.filter((item: any) => item !== option.value);
                }
                return [...prev, option.value];
              });
            }}
          >
            {option.label}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

TestComp.defaultProps = {} as Partial<TestCompProps>;

export default TestComp;
