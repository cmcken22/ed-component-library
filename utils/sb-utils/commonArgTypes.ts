const commonArgTypes = {
  labelPosition: {
    labelPosition: {
      options: ["top", "left"],
      control: { type: "radio" },
    },
  },
  status: {
    status: {
      options: [undefined, "success", "warning", "error"],
      control: { type: "radio" },
    },
  },
  onChange: {
    onChange: { action: "onChange" },
  },
  onFocus: {
    onfocus: { action: "onFocus" },
  },
  onBlur: {
    onBlur: { action: "onBlur" },
  },
  onClick: {
    onClick: { action: "onClick" },
  },
  onHover: {
    onHover: { action: "onHover" },
  },
};

export default commonArgTypes;
