import { Box } from "@mui/material";
import cx from "classnames";
import { useCallback, useEffect, useState } from "react";
import { IconVariant } from "src/Icon";
import { reduceRepeatingValues } from "src/utils";
import { Icon } from "..";
import { PaginationProps } from "./Pagination.types";
import PaginationItem from "./PaginationItem";

const ArrowIcon = ({ iconVariant, onClick, disabled }: any) => {
  return (
    <Icon
      icon={iconVariant}
      size={24}
      onClick={onClick}
      sx={{
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.5 : 1,
      }}
    />
  );
};

const EMPTY_CELL = "_";

const Pagination = ({
  id,
  className,
  sx,
  page: passedPage,
  count,
  startBoundaryCount,
  endBoundaryCount,
  siblingCount,
  onChange,
  hideBackButton,
  hideFirstButton,
  hideNextButton,
  hideLastButton,
}: PaginationProps) => {
  const [page, setPage] = useState(passedPage);

  const handleChange = useCallback(
    (page: number) => {
      setPage(page);
      if (onChange) onChange(page);
    },
    [onChange, setPage]
  );

  const handleGoToNextPage = useCallback(() => {
    const nextPage = page + 1;
    if (nextPage <= count) {
      handleChange(nextPage);
    }
  }, [page, count, handleChange]);

  const handleGoToPrevPage = useCallback(() => {
    const nextPage = page - 1;
    if (nextPage > 0) {
      handleChange(nextPage);
    }
  }, [page, count, handleChange]);

  useEffect(() => {
    setPage(passedPage);
  }, [passedPage]);

  const getPaginatedArray = useCallback(
    ({
      page,
      count,
      startBoundaryCount,
      endBoundaryCount,
      siblingCount,
    }: any) => {
      const pages = Array.from({ length: count }).map(() => EMPTY_CELL);
      const nextPages = [...pages];

      for (let i = 0; i <= startBoundaryCount - 1; i++) {
        if (i >= count) break;
        nextPages[i] = `${i + 1}`;
      }
      for (let i = endBoundaryCount - 1; i >= 0; i--) {
        if (i < 0) break;
        const index = `${nextPages.length - 1 - i}`;
        nextPages[index] = `${count - i}`;
      }

      const currentPageIndex = page - 1;
      let counter = 1;
      nextPages[currentPageIndex] = `${page}`;
      while (counter <= siblingCount) {
        const leftCounter = currentPageIndex - counter;
        const rightCounter = currentPageIndex + counter;
        if (leftCounter >= 0) {
          nextPages[leftCounter] = `${leftCounter + 1}`;
        }
        if (rightCounter < count) {
          nextPages[rightCounter] = `${rightCounter + 1}`;
        }
        counter++;
      }

      const newArray = reduceRepeatingValues(nextPages);
      return newArray;
    },
    []
  );

  const renderContent = useCallback(() => {
    const items: any[] = [];
    const paginatedArray = getPaginatedArray({
      page,
      count,
      startBoundaryCount,
      endBoundaryCount,
      siblingCount,
    });

    for (const item of paginatedArray) {
      if (item === EMPTY_CELL) {
        items.push(
          <PaginationItem
            key={items.length}
            text="..."
            sx={{
              userSelect: "none",
            }}
          />
        );
      } else {
        items.push(
          <PaginationItem
            active={item === `${page}`}
            key={items.length}
            pageNumber={item}
            text={item}
            onClick={handleChange}
          />
        );
      }
    }

    return items;
  }, [
    page,
    count,
    startBoundaryCount,
    endBoundaryCount,
    siblingCount,
    getPaginatedArray,
    handleChange,
  ]);

  const renderBackArrows = useCallback(() => {
    if (hideBackButton && hideFirstButton) {
      return null;
    }
    return (
      <Box
        sx={{
          height: "24px",
          display: "flex",
          gap: 1,
        }}
      >
        {!hideFirstButton && (
          <ArrowIcon
            iconVariant={IconVariant.DoubleArrowLeft}
            onClick={() => handleChange(1)}
            disabled={`${page}` === "1"}
          />
        )}
        {!hideBackButton && (
          <ArrowIcon
            iconVariant={IconVariant.NavArrowLeft}
            onClick={handleGoToPrevPage}
            disabled={`${page}` === "1"}
          />
        )}
      </Box>
    );
  }, [handleChange, handleGoToPrevPage, hideBackButton, hideFirstButton, page]);

  const renderNextArrows = useCallback(() => {
    if (hideNextButton && hideLastButton) {
      return null;
    }
    return (
      <Box
        sx={{
          height: "24px",
          display: "flex",
          gap: 1,
        }}
      >
        {!hideNextButton && (
          <ArrowIcon
            iconVariant={IconVariant.NavArrowRight}
            onClick={handleGoToNextPage}
            disabled={`${page}` === `${count}`}
          />
        )}
        {!hideLastButton && (
          <ArrowIcon
            iconVariant={IconVariant.DoubleArrowRight}
            onClick={() => handleChange(count)}
            disabled={`${page}` === `${count}`}
          />
        )}
      </Box>
    );
  }, [
    handleChange,
    handleGoToPrevPage,
    hideNextButton,
    hideLastButton,
    page,
    count,
  ]);

  return (
    <Box
      id={id}
      className={cx("Pagination", {
        [className]: className,
      })}
      sx={sx}
      data-testid="Pagination"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {renderBackArrows()}
        {renderContent()}
        {renderNextArrows()}
      </Box>
    </Box>
  );
};

Pagination.defaultProps = {
  startBoundaryCount: 2,
  endBoundaryCount: 1,
  siblingCount: 1,
  count: 1,
  page: 1,
  hideBackButton: false,
  hideFirstButton: false,
  hideNextButton: false,
  hideLastButton: false,
} as Partial<PaginationProps>;

export default Pagination;
