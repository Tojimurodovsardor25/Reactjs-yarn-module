import './App.css';
import Nav from './Nav'
import Header from './Header'
import Main from './Main'
import navLogoimg from './img/nike logo.png'
function App() {
  return (
    <>
      <header>
        <nav>
          <a href="#!" className="logo">
            <img src={navLogoimg} alt="png" />
          </a>
          <ul>
            <Nav title="Кроссовки" />
            <Nav title="Кеды" />
            <Nav title="Футболки" />
            <Nav title="Шорты" />
            <Nav title="Майки" />
            <Nav title="Олимпийки" />
            <Nav title="Толстовки" />
          </ul>
        </nav>
        <div className="title">
          <Header headerTitle="Nike" headerText="Китайские nike от" headerSpan="Change IT academy" />
        </div>
      </header>
      <main>
        <div className="product">
          <div className="product_left">
            <div className="left_img">
              <img src="#!" alt="png" />
            </div>
            <div className="left_info">
              <Main mainTitle="Кросовки" mainInfo="Nike Neoline" mainText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                        unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit"/>
            </div>
          </div>
          {/* <div className="product_right">
            <div className="right_box">
              <div className="box_img">
                <img src="#!" alt="png" />
              </div>

              <div className="box_info">
                <h3>Кроссовки Nike Sport</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
              </div>
            </div>
          </div> */}
        </div>
      </main>
    </>
  );
}
export default App;
