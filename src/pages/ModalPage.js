import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  }
  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>I Accept</Button>
    </div>
  )
  const modal = <Modal onClose={handleClose} actionBar={actionBar} >
    <p>Here is some important information</p>
  </Modal>
  return (
    <div >
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel aliquam libero, ut egestas lectus. Sed sed ultrices nisi. Donec consequat risus quam, ac fermentum turpis pulvinar at. Fusce luctus tempor faucibus. Maecenas luctus in justo at ultricies. Fusce convallis nisl auctor, bibendum ligula nec, malesuada quam. Phasellus vitae tempus enim, vitae fringilla metus. Vivamus a porttitor tortor. Praesent consectetur ipsum non convallis tristique. Praesent non nisl ultrices, elementum augue quis, efficitur libero.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel aliquam libero, ut egestas lectus. Sed sed ultrices nisi. Donec consequat risus quam, ac fermentum turpis pulvinar at. Fusce luctus tempor faucibus. Maecenas luctus in justo at ultricies. Fusce convallis nisl auctor, bibendum ligula nec, malesuada quam. Phasellus vitae tempus enim, vitae fringilla metus. Vivamus a porttitor tortor. Praesent consectetur ipsum non convallis tristique. Praesent non nisl ultrices, elementum augue quis, efficitur libero.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel aliquam libero, ut egestas lectus. Sed sed ultrices nisi. Donec consequat risus quam, ac fermentum turpis pulvinar at. Fusce luctus tempor faucibus. Maecenas luctus in justo at ultricies. Fusce convallis nisl auctor, bibendum ligula nec, malesuada quam. Phasellus vitae tempus enim, vitae fringilla metus. Vivamus a porttitor tortor. Praesent consectetur ipsum non convallis tristique. Praesent non nisl ultrices, elementum augue quis, efficitur libero.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel aliquam libero, ut egestas lectus. Sed sed ultrices nisi. Donec consequat risus quam, ac fermentum turpis pulvinar at. Fusce luctus tempor faucibus. Maecenas luctus in justo at ultricies. Fusce convallis nisl auctor, bibendum ligula nec, malesuada quam. Phasellus vitae tempus enim, vitae fringilla metus. Vivamus a porttitor tortor. Praesent consectetur ipsum non convallis tristique. Praesent non nisl ultrices, elementum augue quis, efficitur libero.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel aliquam libero, ut egestas lectus. Sed sed ultrices nisi. Donec consequat risus quam, ac fermentum turpis pulvinar at. Fusce luctus tempor faucibus. Maecenas luctus in justo at ultricies. Fusce convallis nisl auctor, bibendum ligula nec, malesuada quam. Phasellus vitae tempus enim, vitae fringilla metus. Vivamus a porttitor tortor. Praesent consectetur ipsum non convallis tristique. Praesent non nisl ultrices, elementum augue quis, efficitur libero.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel aliquam libero, ut egestas lectus. Sed sed ultrices nisi. Donec consequat risus quam, ac fermentum turpis pulvinar at. Fusce luctus tempor faucibus. Maecenas luctus in justo at ultricies. Fusce convallis nisl auctor, bibendum ligula nec, malesuada quam. Phasellus vitae tempus enim, vitae fringilla metus. Vivamus a porttitor tortor. Praesent consectetur ipsum non convallis tristique. Praesent non nisl ultrices, elementum augue quis, efficitur libero.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel aliquam libero, ut egestas lectus. Sed sed ultrices nisi. Donec consequat risus quam, ac fermentum turpis pulvinar at. Fusce luctus tempor faucibus. Maecenas luctus in justo at ultricies. Fusce convallis nisl auctor, bibendum ligula nec, malesuada quam. Phasellus vitae tempus enim, vitae fringilla metus. Vivamus a porttitor tortor. Praesent consectetur ipsum non convallis tristique. Praesent non nisl ultrices, elementum augue quis, efficitur libero.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel aliquam libero, ut egestas lectus. Sed sed ultrices nisi. Donec consequat risus quam, ac fermentum turpis pulvinar at. Fusce luctus tempor faucibus. Maecenas luctus in justo at ultricies. Fusce convallis nisl auctor, bibendum ligula nec, malesuada quam. Phasellus vitae tempus enim, vitae fringilla metus. Vivamus a porttitor tortor. Praesent consectetur ipsum non convallis tristique. Praesent non nisl ultrices, elementum augue quis, efficitur libero.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel aliquam libero, ut egestas lectus. Sed sed ultrices nisi. Donec consequat risus quam, ac fermentum turpis pulvinar at. Fusce luctus tempor faucibus. Maecenas luctus in justo at ultricies. Fusce convallis nisl auctor, bibendum ligula nec, malesuada quam. Phasellus vitae tempus enim, vitae fringilla metus. Vivamus a porttitor tortor. Praesent consectetur ipsum non convallis tristique. Praesent non nisl ultrices, elementum augue quis, efficitur libero.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel aliquam libero, ut egestas lectus. Sed sed ultrices nisi. Donec consequat risus quam, ac fermentum turpis pulvinar at. Fusce luctus tempor faucibus. Maecenas luctus in justo at ultricies. Fusce convallis nisl auctor, bibendum ligula nec, malesuada quam. Phasellus vitae tempus enim, vitae fringilla metus. Vivamus a porttitor tortor. Praesent consectetur ipsum non convallis tristique. Praesent non nisl ultrices, elementum augue quis, efficitur libero.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel aliquam libero, ut egestas lectus. Sed sed ultrices nisi. Donec consequat risus quam, ac fermentum turpis pulvinar at. Fusce luctus tempor faucibus. Maecenas luctus in justo at ultricies. Fusce convallis nisl auctor, bibendum ligula nec, malesuada quam. Phasellus vitae tempus enim, vitae fringilla metus. Vivamus a porttitor tortor. Praesent consectetur ipsum non convallis tristique. Praesent non nisl ultrices, elementum augue quis, efficitur libero.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel aliquam libero, ut egestas lectus. Sed sed ultrices nisi. Donec consequat risus quam, ac fermentum turpis pulvinar at. Fusce luctus tempor faucibus. Maecenas luctus in justo at ultricies. Fusce convallis nisl auctor, bibendum ligula nec, malesuada quam. Phasellus vitae tempus enim, vitae fringilla metus. Vivamus a porttitor tortor. Praesent consectetur ipsum non convallis tristique. Praesent non nisl ultrices, elementum augue quis, efficitur libero.
      </p>
    </div>
  );
}

export default ModalPage;
