function icon(name) {
  return (
    <img
      src={`./icons_FEtask/${name}.svg`}
      alt={`${name} Icon`}
      style={{ width: "16px", height: "16px" }}
    />
  );
}

export const getPriorityIcon = (priority) => {
  switch (priority) {
    case "No priority":
      return icon("No-priority");
    case "Low":
      return icon("Img - Low Priority");
    case "Medium":
      return icon("Img - Medium Priority");
    case "High":
      return icon("Img - High Priority");
    case "Urgent":
      return icon("SVG - Urgent Priority colour");
  }
};

export const getStatusIcon = (priority) => {
  switch (priority) {
    case "Backlog":
      return icon("Backlog");
    case "Todo":
      return icon("To-do");
    case "In progress":
      return icon("in-progress");
    case "Done":
      return icon("Done");
    case "Canceled":
      return icon("Cancelled");
  }
};
