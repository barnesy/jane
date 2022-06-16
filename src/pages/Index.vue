<template>
  <Directory
    class="narrow dark"
    bgColor="var(--light-blue)"
    bgImage="url('https://images.squarespace-cdn.com/content/v1/528d0f42e4b0b3137dcda1ca/1525909647365-ZFU12BQUXL0LSGBP5GQZ/pride1%5B1%5D.png?format=2500w')"
  >
    <template #page-header>
      <Header class="v4">
        <template>
          welcome to your gay future

        </template>
        <template #support>THESE THINGS ARE GAY!!!!</template>
      </Header>
    </template>

    <PageSection
      class="narrow left"
      bgColor="var(--light-grey)"
      padding="6rem 3rem 7rem"
    >
      <template #title>
        look at these gay things!!!
      </template>

      <template>
       <CardGroup>
         <Card url="gay-memes">
           <template #image>
             <img src="https://cdn.memes.com/up/53658651627584715/i/1627643431117.png" />
           </template>
           <template>
              gay memes
           </template>
         </Card>

         <Card url="http://tiktok.com">
           <template #image>
             <img src="https://cdn.memes.com/up/53658651627584715/i/1627643431117.png" />
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
