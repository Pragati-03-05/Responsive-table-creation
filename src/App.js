import React from 'react';
import './style.css';

const App = () => {
  return (
    <table role="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Job Title</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>James</td>
          <td>Matman</td>
          <td>Chief Sandwich Eater</td>
        </tr>
        <tr>
          <td>The</td>
          <td>Tick</td>
          <td>Crimefighter Sorta</td>
        </tr>
        <tr>
          <td>Jokey</td>
          <td>Smurf</td>
          <td>Giving Exploding Presents</td>
        </tr>
        <tr>
          <td>Cindy</td>
          <td>Beyler</td>
          <td>Sales Representative</td>
        </tr>
        <tr>
          <td>Captain</td>
          <td>Cool</td>
          <td>Tree Crusher</td>
        </tr>
      </tbody>
    </table>
  );
};
export default App;
