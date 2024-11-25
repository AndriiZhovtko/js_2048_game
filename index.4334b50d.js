const t=new class{constructor(t=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]){this.score=0,this.status="idle",this.initialState=t,this.state=this.copyState(this.initialState)}copyState(t){return t.map(t=>[...t])}addRandomTile(){let t=[];for(let e=0;e<4;e++)for(let s=0;s<4;s++)0===this.state[e][s]&&t.push([e,s]);if(t.length>0){let e=Math.floor(Math.random()*t.length),[s,a]=t[e];this.state[s][a]=.9>Math.random()?2:4}}moveLeft(){"playing"===this.status&&this.move("left")&&(this.addRandomTile(),this.checkGameState())}moveRight(){"playing"===this.status&&this.move("right")&&(this.addRandomTile(),this.checkGameState())}moveUp(){"playing"===this.status&&this.move("up")&&(this.addRandomTile(),this.checkGameState())}moveDown(){"playing"===this.status&&this.move("down")&&(this.addRandomTile(),this.checkGameState())}move(t){let e=this.copyState(this.state),s=t=>{let e=t.filter(t=>0!==t);for(let t=0;t<e.length-1;t++)e[t]===e[t+1]&&(e[t]*=2,e[t+1]=0,this.score+=e[t]);return e.filter(t=>0!==t)},a=t=>{let e=s(t);for(;e.length<4;)e.push(0);return e},i=t=>{let e=s([...t].reverse());for(;e.length<4;)e.push(0);return e.reverse()},r=t=>t.map(t=>a(t)),o=t=>t.map(t=>i(t));switch(t){case"left":this.state=r(this.state);break;case"right":this.state=o(this.state);break;case"up":this.state=this.transposeState(r(this.transposeState(this.state)));break;case"down":this.state=this.transposeState(o(this.transposeState(this.state)))}return!this.areStatesEqual(this.state,e)}checkGameState(){for(let t=0;t<4;t++)for(let e=0;e<4;e++)if(2048===this.state[t][e]){this.status="win";return}this.hasEmptyCells()||this.canCombine()||(this.status="lose")}hasEmptyCells(){for(let t=0;t<4;t++)for(let e=0;e<4;e++)if(0===this.state[t][e])return!0;return!1}canCombine(){for(let t=0;t<4;t++)for(let e=0;e<4;e++){let s=this.state[t][e];if(e<3&&s===this.state[t][e+1]||t<3&&s===this.state[t+1][e])return!0}return!1}transposeState(t){let e=[];for(let s=0;s<4;s++){e[s]=[];for(let a=0;a<4;a++)e[s].push(t[a][s])}return e}getScore(){return this.score}getState(){return this.state}getStatus(){return this.status}start(){"idle"===this.status&&(this.status="playing",this.addRandomTile(),this.addRandomTile())}restart(){this.state=this.initialState.map(t=>[...t]),this.score=0,this.status="idle"}areStatesEqual(t,e){for(let s=0;s<4;s++)for(let a=0;a<4;a++)if(t[s][a]!==e[s][a])return!1;return!0}},e=document.querySelectorAll(".field-cell"),s=document.querySelector(".button.start");function a(){let s=0,a=t.getState();for(let t=0;t<4;t++)for(let i=0;i<4;i++){let r=e[s];r.className="field-cell",a[t][i]?(r.textContent=a[t][i],r.classList.add(`field-cell--${a[t][i]}`)):r.textContent="",s++}document.querySelector(".game-score").textContent=t.getScore();let i=t.getStatus();"win"===i?document.querySelector(".message-win").classList.remove("hidden"):"lose"===i&&document.querySelector(".message-lose").classList.remove("hidden")}document.addEventListener("keydown",e=>{if("playing"===t.getStatus()){switch(e.key){case"ArrowLeft":t.moveLeft();break;case"ArrowRight":t.moveRight();break;case"ArrowUp":t.moveUp();break;case"ArrowDown":t.moveDown()}a()}}),s.addEventListener("click",()=>{"button restart"===s.className&&t.restart(),t.start(),a(),document.querySelector(".message-win").classList.add("hidden"),document.querySelector(".message-lose").classList.add("hidden"),document.querySelector(".message-start").classList.add("hidden"),s.textContent="Restart",s.className="button restart"});
//# sourceMappingURL=index.4334b50d.js.map