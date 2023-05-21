const UGI = () => {
    return (
    <div>
      <h1>Welcome to the User Guide and Instructions Manual Page!</h1>
      <br />
      <h3><u>Instructions and Info. for the users of this Application are specified below:</u></h3>
      <p>
        <ol>
          <li>This Albums List Management Application will certainly some flaws that will be fixed with time using the feedback you all provide, so please provide feedback by migrating to the Review and Feedback section in the NavBar</li>  
          <li>This is not connected to the server so the changes made will be retained until page is refreshed or some connection issue. On refreshing the website, changes will be lost</li>
          <li>Since this web app is not connected to realtime database it has some problems like CRUD changes commit in the server database that would have also helped us to render the changes made permanently onto the website.</li>
          <li>All can search for any album title using 'Ctrl Key + F ' from the keyboard. By default the albums are sorted in ascending order. It will be tried to give option of changing the ordering of albums based on id or even regardless of it, random (insertion ordered) or sorted id wise, insertion.</li>
          <li>Also a search bar to search albums by id and names or search button/ menu functionality will be added to this web app in the near future. </li>
          <li>Presently new added albums are ordered as per their creation order, and only an album with some title can be added to the list using this App. Id is fixed and assigned automatically as per order and since no connection is there with Real time DB Server, so the ID once assigned are fixed and even after albums deleted the ID holds blank value and not reassigned the adjacent albums parameters.</li>
          <li>Album ID cannot be duplicate here but the same album title may exist here, causing data redundancy (minor degree) to some extent.</li>
          <li>This application is designed using React.js Hooks and fetch API, API call to a website containing albums details list, React API.</li>
          <li>This Web App can help you add new albums and manage and manipulate the existing albums temporarily.</li>
          <li>In future and it will be tried to develop more advance version of this web app, where changes made using Create, Update and Delete Albums on the list of albums present in a Database table in server will be reflected permanently on the website because connection will be established with the server.</li>
          <li>It's a strong hope and I expect to launch a better version of the Albums List Manager App in the next edition of release.</li>
        </ol>
      </p>
      <p>
        If you all, need those instructions and information about the Albums list records manager App you can view and download it from here by clicking on this link: <a href="https://drive.google.com/file/d/1-igfP2vBUJ_dKbJbDIVSPTDy46ngeg6x/view?usp=sharing" target = "blank">View and Download Documentation</a>
      </p>
      <br />
      <h2 style = {{textAlign: 'center'}}>----------x---------- END OF USER GUIDE AND INSTRUCTIONS PAGE ----------x----------</h2>
    </div>
  );
};

export default UGI;