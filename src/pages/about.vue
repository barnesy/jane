<template>
  <Directory
    class="narrow dark"
    bgColor="var(--light-blue)"
    bgImage="url('/blue-to-black.jpg')"
  >
    <template #page-header>
      <Header class="v2">
        <template>
          About Me
        </template>
        <template #support>Here's some stuff about me!!!</template>
      </Header>
    </template>

    <PageSection
      bgColor="var(--light-grey)"
      padding="6rem 3rem 7rem"
    >
      <template #title>
        lets look at these things!!!
      </template>
      one of my favrient
      <template>
       <CardGroup>
         <Card>
           <template #image>
            <img src="https://media.npr.org/assets/img/2017/09/14/gettyimages-10141026_slide-67be9fc1bca330b26debade87690b5e84286614d-s1600-c85.webp" />
           </template>
           <template>
            my favorite animal 
           </template>
         </Card>

         <Card url="https://www.tiktok.com/@iambarnesy/video/6963017995178249477?is_copy_url=1&is_from_webapp=v1">
           <template #image>
             <g-image src="~/assets/my-ad.png" />
           </template>
           <template>
             my maximum ad
           </template>
         </Card>

         <Card>
           <template #image>
            <g-image src="~/assets/max.png" />
           </template>
           <template>
             this is me i am 8 years old
           </template>
         </Card>

         <Card>
           <template #image>
           <iframe width="100%" height="315" src="https://www.youtube.com/embed/HBMmK1c44sE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </template>
           <template>
            one of my favorite mr. beast videos
           </template>
         </Card>

         

       </CardGroup>


      </template>
    
    </PageSection>

  </Directory>
</template>
