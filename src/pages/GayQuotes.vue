<template>
  <Directory
    class="narrow dark"
    bgColor="var(--light-blue)"
    bgImage="url('/brown-to-green.jpg')"
  >
    <template #page-header>
      <Header class="v2">
        <template>
          Gay quotes
        </template>
        <template #support>these are gay quotes!!!</template>
      </Header>
    </template>

    <PageSection
      class="narrow left"
      bgColor="var(--light-grey)"
      padding="6rem 3rem 7rem"
    >
      <template #title>
        look at these gay quotes!!!
      </template>

      <template>
       <CardGroup>

         <Card url="http://tiktok.com">
           <template #image>
             <img src="https://cdn.shopify.com/s/files/1/0553/5370/4604/products/il_fullxfull.3683814943_ntwr_2048x.jpg?v=1643646112" />
           </template>
           <template>
              something gay
           </template>
         </Card>

       </CardGroup>
      </template>

    </PageSection>

  </Directory>
</template>
