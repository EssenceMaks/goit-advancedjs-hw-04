import{a as y,S as L,i as l}from"./assets/vendor-C4-ZuMk8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const S="46726016-b290741f0a1b76ad16aa31499";y.defaults.baseURL="https://pixabay.com/api/";async function m(r,t=1){const o=new URLSearchParams({key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t});return(await y.get(`?${o}`)).data}let d;function f(r,t=!1){const o=r.map(({tags:s,webformatURL:e,largeImageURL:a,likes:c,views:p,comments:b,downloads:w})=>`
      <li class="gallery-card">
        <a class="gallery-link" href="${a}">
            <img class="gallery-img" src="${e}" alt="${s}" />
            <div class="values-container">
                <ul class="labels">
                    <li>Likes</li>
                    <li>${c}</li>
                </ul>
                <ul class="labels">
                    <li>Views</li>
                    <li>${p}</li>
                </ul>
                <ul class="labels">
                    <li>Comments</li>
                    <li>${b}</li>
                </ul>
                <ul class="labels">
                    <li>Downloads</li>
                    <li>${w}</li>
                </ul>
            </div>
        </a>
      </li>`).join("");C(o,t)}function C(r,t){const o=document.querySelector("ul.images-div");t?o.insertAdjacentHTML("beforeend",r):o.innerHTML=r,d?d.refresh():d=new L(".images-div a",{captionsData:"alt",captionDelay:250})}const v=document.querySelector("button[type=submit]"),q=document.querySelector(".images-div"),u=document.querySelector(".loaderClass"),n=document.querySelector(".load-more");let i=1,g="";v.addEventListener("click",P);n.addEventListener("click",M);async function P(r){r.preventDefault();const t=document.querySelector('input[name="search"]'),o=document.querySelector(".not-found-img"),s=t.value.trim();if(s.length===0){l.show({title:"❌",message:"Please enter a search query!",color:"ef4040"});return}i=1,g=s,q.innerHTML="",n.style.display="none",o.innerHTML="",u.style.display="flex";try{const e=await m(s,i);if(e.total===0){o.innerHTML=`Results for query <span>${s}</span> not found!`,l.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"white"});return}f(e.hits),e.totalHits>i*15?n.style.display="block":l.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#4e75ff",messageColor:"white"}),await h()}catch(e){console.error(e),l.show({title:"❌",message:"An error occurred while fetching images",backgroundColor:"#ef4040",messageColor:"white"})}finally{u.style.display="none",t.value=""}}async function M(){i+=1,n.style.display="none",u.style.display="flex";try{const r=await m(g,i);f(r.hits,!0);const t=document.querySelector(".gallery-card");if(t){const{height:o}=t.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}u.style.display="none",i*15>=r.totalHits?(n.style.display="none",l.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#4e75ff",messageColor:"white"})):n.style.display="block",await h()}catch(r){console.error(r),l.show({title:"❌",message:"An error occurred while loading more images",backgroundColor:"#ef4040",messageColor:"white"}),u.style.display="none"}}async function h(){const r=document.querySelectorAll(".gallery-img"),t=Array.from(r).map(o=>new Promise(s=>{o.onload=s,o.onerror=s}));await Promise.all(t)}
//# sourceMappingURL=index.js.map
