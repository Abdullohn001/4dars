import { Link } from "react-router-dom";

function Home() {
  return (
    <div className=" ml-auto mr-auto  w-[1000px] grid place-items-center">
      <h1 className="text-2xl mt-[50px] text-white font-mono ">Home</h1>
      <h3 className="mt-[50px] ">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
          placeat architecto cumque, at blanditiis odio quod deleniti eius quasi
          earum a quae. In voluptas, soluta quis placeat accusantium sit ratione
          possimus molestias nam hic, ex necessitatibus quaerat reprehenderit
          consectetur consequuntur! Ipsum corrupti error distinctio animi quidem
          eius nam ut repudiandae debitis quisquam eaque iure, magnam, beatae
          dolor temporibus dignissimos quod quam suscipit! Incidunt consectetur
          saepe voluptates rem voluptatum quibusdam explicabo hic asperiores
          consequatur repellat reiciendis soluta, vel, nemo earum temporibus
          excepturi debitis provident quia commodi unde adipisci! Eligendi nemo
          accusantium totam eos doloremque nam esse, cum asperiores, tempora
          officiis accusamus deserunt, blanditiis expedita. Iste praesentium
          dolorem eius et dicta mollitia sapiente facilis aut necessitatibus
          laborum magni omnis a ipsa consequuntur enim delectus, quos
          perferendis dolores placeat tempore velit officia sint. Consequuntur,
          exercitationem. Vero sapiente possimus culpa consectetur quod debitis
          et, voluptatum vitae, necessitatibus totam eos nesciunt vel iste ipsam
          odio.
        </p>
      </h3>
      <Link to="/about" className="btn btn-ghost mt-6">About</Link>
    </div>
  );
}

export default Home;
