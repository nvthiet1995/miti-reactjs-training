import TopBar from './components/top-bar/TopBar';
import Header from './components/headers/Header';
import Slider from './components/headers/Slider';
import ProductContainer from './components/products/ProductContainer';
import BrandContainer from './components/brands/BrandContainer';
import StepContainer from './components/steps/StepContainer';
import PreFooterContainer from './components/pre-footer/PreFooterContainer';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <TopBar></TopBar>
      <Header></Header>
      <Slider></Slider>
      <ProductContainer></ProductContainer>
      <BrandContainer></BrandContainer>
      <StepContainer></StepContainer>
      <PreFooterContainer></PreFooterContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
