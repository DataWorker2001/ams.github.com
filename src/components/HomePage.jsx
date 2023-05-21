// import im from './bg1.jpg';
import './hp.css';
const HomePage = () => {
    // const divStyle = {
    //   // backgroundImage: <img src = {im} alt = "Img not found, detected, spotted" />,
    //   backgroundImage: $.require{im}, 
    //   backgroundSize: 'cover',
    // };
    return (
    <div className = "hpage">
      <h2 style={{color: 'purple', textAlign: 'center'}}>Welcome to the Home Page of the Album List Management Systems!</h2>
      <br />
      <p style = {{fontWeight: 'bold'}}> This App can be used to manage list of existing 100 albums from <a href='https://jsonplaceholder.typicode.com/albums' target= 'blank'>this Link</a> and even add new albums and update, delete the list of albums using dummy calls. Once the page is refreshed all changes are lost and until that all are preserved bcz the changes are not made in the server as per requirement. </p>
      <br />
      <ol>
        <li><b>Hello everyone, all of you can try out our Albums List Manager Basic Application by navigating to the Manage Albums List option from the NavBar.</b></li>
        <li><b>You can find more details, info, instructions manual about this Albums List Manager App in the User Guide option in the NavBar.</b></li>
        <li><b>If need any further help or info regarding this App and Web Dev, you all can find my contact info. by navigating to the Contact option using the NavBar.</b></li>
        <li><b>Please don't forget to share your reviews, rating, improvement suggestions etc w.r.t. this App by going to the Review and Feedback section from the NavBar.</b></li>
      </ol>
      <br /><br /><br /><br /><br /><br /><br />
      <h3 style = {{textAlign: 'center'}}>Many Upcoming Websites are expected to be developed in the coming days and future.</h3>
      <h2 style = {{textAlign: 'center'}}>----------x---------- END OF HOME PAGE ----------x----------</h2>
      </div>
  );
};

export default HomePage;