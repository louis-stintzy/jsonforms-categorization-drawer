interface BoundDataProps {
  stringifiedData: string;
  resetForm: () => void;
}

function BoundData({ stringifiedData, resetForm }: BoundDataProps) {
  return (
    <div style={{ position: "fixed", top: "350px", width: "100%" }}>
      <h4>Bound data</h4>
      <button
        onClick={resetForm}
        style={{
          margin: "auto !important",
          display: "block !important",
          marginBottom: "1rem",
        }}
      >
        Reset
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          borderRadius: "0.25rem",
          backgroundColor: "#cecece",
          marginBottom: "1rem",
        }}
      >
        <pre id="boundData">{stringifiedData}</pre>
      </div>
    </div>
  );
}

export default BoundData;
