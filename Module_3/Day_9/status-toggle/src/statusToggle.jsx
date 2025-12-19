import React, { useState } from "react";

function StatusToggle() {
  const [status, setStatus] = useState(false);

  return (
    <div>
      <button onClick={() => setStatus(!status)}>
        Toggle Status
      </button>

      <p>
        {status ? "Status is TRUE" : "Status is FALSE"}
      </p>
    </div>
  );
}

export default StatusToggle;
