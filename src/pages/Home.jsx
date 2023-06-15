import UserDetails from "../components/UserDetails";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">Quiz Whizz ?</h1>
      <div  className = "user-detail-container">
        <UserDetails />
      </div>
    </div>
  );
};

export default Home;
