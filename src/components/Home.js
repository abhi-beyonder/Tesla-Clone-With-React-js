import React from 'react'
import styled from 'styled-components'
import Section from './Section'


function Home() {
    return (
        <Container>
            <Section
                title="Model-S"
                description="Order Online for Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                backgroundImg="model-s.jpg"
            />
            <Section
                title="Model-Y"
                description="Order Online for Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                backgroundImg="model-y.jpg"

            />
            <Section
                title="Model-3"
                description="Order Online for Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                backgroundImg="model-3.jpg"

            />
            <Section
                title="Model-X"
                description="Order Online for Touchless Delivery"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
                backgroundImg="model-x.jpg"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarntee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section
                title="Accessories"
                description="Solar Roof Costs Less Than a Roof Plus Solar Panels"
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height=100vh;
`