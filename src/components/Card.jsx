import React from 'react';

function ResultCard(props) {
    return (
        <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src={ props.imgSrc}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{ props.name}
      </h1>
      <div class="flex justify-center">
                        <button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg" onClick={()=> window.location.assign(props.url) } >Watch</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" onClick={()=> window.location.replace(`https://twitter.com/intent/tweet?text=${props.url} by @anshumeena1947`)}>Share</button>
      </div>
    </div>
  </div>
</section>
    );
}

export default ResultCard;