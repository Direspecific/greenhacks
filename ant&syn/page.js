.App {
  background-color: #c8ebff; /* Blue background */
  min-height: 100vh;
  display: flex;
}

.rectangle {
  background-color: #ffffff;
  width: 300px;
  height: 50px;
  margin-top: 20px;
  margin-left: 150px;
  border-radius: 5px;
}

.rectangle-text {
  color: #5da1c7; /* Font color */
  font-size: 25px;
  text-align: center;
  margin-top: 5px;
  font-weight: bold;
}

.answer-box {
  position: absolute;
  background-color: #ffffff;
  width: 800px;
  height: 450px;
  margin-top: 50px;
  border-radius: 5px;
}

.answer-box-text {
  font-size: 30px;
  text-align: center;
  margin-top: 50px;
  font-weight: bold;
}

.button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.button {
  background-color: #C8EBFF; /* Blue background */
  color: rgb(0, 0, 0); /* Text color */
  width: 100%;
  height: 100%;
  border: none;
  padding: 10px 10px;
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  
}

.button:hover {
  background-color: #9ab5c4; /* Darker blue on hover */
}
