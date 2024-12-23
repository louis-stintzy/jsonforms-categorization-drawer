import { Button } from "antd";
import { Typography } from "antd";
import { useState } from "react";

interface BoundDataProps {
  stringifiedData: string;
  resetForm: () => void;
  showDrawer: () => void;
}

function BoundData({ stringifiedData, resetForm, showDrawer }: BoundDataProps) {
  const [boundDataIsVisible, setBoundDataIsVisible] = useState(false);
  const handleClick = () => {
    setBoundDataIsVisible(!boundDataIsVisible);
  };
  const { Title } = Typography;

  const buttonStyle = {
    margin: "0 1rem 1rem 0",
    width: "128px",
  };
  return (
    <div>
      <Button type="primary" onClick={showDrawer} style={buttonStyle}>
        Show Drawer
      </Button>
      <Button
        color="primary"
        variant="outlined"
        onClick={resetForm}
        style={buttonStyle}
      >
        Reset Data
      </Button>
      <Button
        color="primary"
        variant="outlined"
        onClick={handleClick}
        style={buttonStyle}
      >
        {boundDataIsVisible ? "Hide" : "Show"} Bound Data
      </Button>
      <div
        style={{
          visibility: boundDataIsVisible ? "visible" : "hidden",
        }}
      >
        <Title level={4}>Bound data</Title>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            borderRadius: "0.25rem",
            backgroundColor: "#cecece",
            marginBottom: "1rem",
            padding: "0.5rem",
          }}
        >
          <pre id="boundData">{stringifiedData}</pre>
        </div>
      </div>
    </div>
  );
}

export default BoundData;
