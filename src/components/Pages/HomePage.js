import React from "react";
// import image1 from "../../Images/bg1.jpg";

const HomePage = () => {
  return (
    <div className="container">
      <h1>PortFolio</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        excepturi ad cumque neque esse soluta quis ratione, vitae reiciendis
        quasi eaque nemo quae doloribus, assumenda laborum labore cupiditate
        deleniti? Optio assumenda totam ipsam hic alias unde voluptatum commodi
        labore doloremque rerum? Corrupti eum similique eligendi numquam, alias
        sequi repellat eaque esse necessitatibus quisquam quaerat corporis
        temporibus maiores sint sunt sit suscipit amet tenetur, distinctio
        consequuntur voluptas minima accusantium blanditiis! Reiciendis laborum
        reprehenderit blanditiis necessitatibus minima enim, dolorum earum in
        libero amet ex. Exercitationem architecto tempora doloribus, laboriosam
        quo tempore fugiat ut necessitatibus doloremque, iusto suscipit unde.
        Saepe porro veniam officia?
      </p>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Services</h2>
            <h3 class="section-subheading text-muted mb-4">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">E-Commerce</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">Responsive Design</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">Web Security</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
