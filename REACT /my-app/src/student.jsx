function Student() {
  return (
    <h1> Student information </h1>
  );
}
export default function Sinfo() {
  return (
    <><Student />
    <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>number</th>
        </tr>
        <tr>
            <td>suvin</td>
            <td>a@a.com</td>
            <td>12345</td>
        </tr>
        <tr>
            <td>A</td>
            <td>b@b.com</td>
            <td>67890</td>
        </tr>
        <tr>
            <td>C</td>
            <td>c@c.com</td>
            <td>13579</td>
        </tr>
    </table>
    </>
  );
}