<template>
  <div>
    <div class="add-container">
      <input type="button" class="add-button" value="+" />
      <input type="text" class="add-message" value="" placeholder="Type ToDo name here..."/>
    </div>
    <h4 class="list-title">ToDo List</h4>
    <div class="list-container">
    </div>
  </div>
</template>

<style scoped>

.add-container {
  width: 60vw;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.add-button {
  cursor: pointer;
  width: 3vw;
  height: 4vh;
  background-color: mediumaquamarine;
  font-weight: bold;
  font-size: x-large;
  border-radius: 5px;
  box-shadow: 0 2px 3px 1px rgba(255, 255, 255, 0.19), 0 2px 3px 1px rgba(255, 255, 255, 0.19), 0 2px 3px 1px rgba(255, 255, 255, 0.19), 0 2px 3px 1px rgba(255, 255, 255, 0.19);
  text-shadow: 2px 1px 2px azure;
}

.add-button:active {
  cursor: pointer;
}

.add-button:hover {
  box-shadow: 1px 1px 1px rgba(69,69,69,0.7);
  cursor: pointer;
}

.add-message {
  padding-left: 15px;
  cursor: pointer;
  width: 50vw;
  height: 6vh;
  background-color: azure;
  font-weight: bold;
  font-size: medium;
  border-radius: 5px;
  box-shadow: 0 2px 3px 1px rgba(255, 255, 255, 0.19), 0 2px 3px 1px rgba(255, 255, 255, 0.19), 0 2px 3px 1px rgba(255, 255, 255, 0.19), 0 2px 3px 1px rgba(255, 255, 255, 0.19);
}

.list-title {
  text-align: center;
}

.list-container {
  border-radius: 10px;
  border: 1px solid slategray;
  width: 60vw;
  height: 55vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
