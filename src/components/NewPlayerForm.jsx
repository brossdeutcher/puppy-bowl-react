const NewPlayerForm = () => {
  const postNewPlayer = async (playerObj) => {
    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/3206-fsa-et-web-ft-sf/players",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: playerObj.name,
            breed: playerObj.breed,
            status: playerObj.status,
            imageUrl: playerObj.imageUrl,
            teamId: playerObj.teamId
          }),
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };
  const myNewPlayer = {
    name: 'Jussi',
    breed: 'yorkshite terrier',
    status: 'field',
    imageUrl: 'https://c8.alamy.com/comp/2HB2PMF/small-grey-dog-sitting-on-a-lawn-which-is-crossed-between-a-yorky-and-a-westie-2HB2PMF.jpg',
    teamId: 1358
  }

  const submitHandler = (e) => {
    e.preventDefault();
    postNewPlayer(myNewPlayer)
    console.log(e.target);
  }

  return (
    <>
      <h1>NewPlayerForm</h1>
      <form onSubmit={submitHandler}>
        <label>
          Name: 
          <input type="text" />
        </label>
        <button>Add a Pup!!</button>
      </form>
    </>
  );
};

export default NewPlayerForm;
