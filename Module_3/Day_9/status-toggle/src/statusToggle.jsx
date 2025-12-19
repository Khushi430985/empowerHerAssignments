import React, { useState } from "react";

function StatusToggle() {
  const [status, setStatus] = useState(false);

  return (
    <div>
      <button onClick={() => setStatus(!status)}>
        Toggle Status
      </button>

      {status ? (
        <h3>Status is TRUE</h3>
      ) : (
        <h3>Status is FALSE</h3>
      )}
    </div>
  );
}

export default StatusToggle;
