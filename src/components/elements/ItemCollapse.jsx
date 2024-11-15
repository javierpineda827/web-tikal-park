import { useEffect } from "react";
import PropTypes from "prop-types";

const ItemCollapse = () => {
  useEffect(() => {
    const handleCollapseClick = (event) => {
      const item = event.currentTarget;
      const parent = item.closest(".block-filter");
      if (!parent) return;

      const boxCollapse = parent.querySelector(".box-collapse");

      if (boxCollapse) {
        if (
          boxCollapse.style.display === "none" ||
          !boxCollapse.style.display
        ) {
          boxCollapse.style.display = "block";
        } else {
          boxCollapse.style.display = "none";
        }
        item.classList.toggle("collapsed-item");
      }
    };

    const collapsibleItems = document.querySelectorAll(".item-collapse");
    collapsibleItems.forEach((item) => {
      item.addEventListener("click", handleCollapseClick);
    });

    const boxCollapses = document.querySelectorAll(".box-collapse");
    boxCollapses.forEach((boxCollapse) => {
      boxCollapse.style.display = "block";
    });

    return () => {
      collapsibleItems.forEach((item) => {
        item.removeEventListener("click", handleCollapseClick);
      });
    };
  }, []);

  return null;
};

ItemCollapse.propTypes = {
  // No props required in this component as of now
};

export default ItemCollapse;
