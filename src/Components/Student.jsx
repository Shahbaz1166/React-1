const Student = () => {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Student Details</h2>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#04AA6D", color: "white" }}>
            <th
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Roll No
            </th>
            <th
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Name
            </th>
            <th
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>101</td>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              Ali Khan
            </td>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              ali.khan@example.com
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>102</td>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              Sara Ahmed
            </td>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              sara.ahmed@example.com
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>103</td>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              Usman Raza
            </td>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              usman.raza@example.com
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Student;
