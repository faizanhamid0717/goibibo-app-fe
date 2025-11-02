# goibibo-app-FE
REDUX_FLOW
dispatch(showLoader()) 
   ↓
Action: { type: "SHOW_LOADER" }
   ↓
Reducer runs → returns new state
   ↓
Store updates → notifies React
   ↓
UI re-renders with new state
