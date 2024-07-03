import Accordion from 'react-bootstrap/Accordion';
const FaqSection = () => {
  return (
    <>
      <h1 className='text-center' style={{ "marginTop": "90px" }}>Frequently asked Question</h1>
      <Accordion defaultActiveKey="0" className='accordion'>

        <Accordion.Item eventKey="0" className='accordion-item'>
          <Accordion.Header>1. Are your sweets vegetarian</Accordion.Header>
          <Accordion.Body>
            Yes, all our sweets are vegetarian. We do not use any non-vegetarian ingredients like gelatin or animal-derived additives in our products.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className='accordion-item'>
          <Accordion.Header>2. Do you offer sugar-free options?</Accordion.Header>
          <Accordion.Body>
            Yes, we do offer sugar-free options for customers with dietary restrictions or preferences. These sweets are sweetened with natural sweeteners like stevia.
          </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="2" className='accordion-item'>
          <Accordion.Header>3. What are the ingredients used in your sweets?</Accordion.Header>
          <Accordion.Body>
            Our sweets are made using high-quality ingredients such as sugar, flour, butter, milk, nuts, and flavorings. For specific ingredients or allergens, please refer to the product descriptions or contact our customer service.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className='accordion-item'>
          <Accordion.Header>4. How do you ensure freshness and quality during shipping?</Accordion.Header>
          <Accordion.Body>
            We take great care to ensure that our sweets are packaged securely to maintain freshness during transit. We use insulated packaging and cooling packs when necessary, especially during warmer months.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4" className='accordion-item'>
          <Accordion.Header>5. Are your packaging materials environmentally friendly?</Accordion.Header>
          <Accordion.Body>
            We are committed to sustainability and use eco-friendly packaging materials whenever possible. Our packaging is designed to minimize environmental impact while ensuring the safe delivery of our sweets.
          </Accordion.Body>
        </Accordion.Item>


      </Accordion>
    </>
  );
}
export default FaqSection;