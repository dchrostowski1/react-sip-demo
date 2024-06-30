import { SIPProvider } from "react-sipjs";
import { CallCenter } from "./CallCenter";

function App() {
  return (
    <div className="p-5">
      <SIPProvider
        options={{
          domain: "192.168.2.150",
          webSocketServer: "ws://192.168.2.150:8088/ws",
        }}
      >
        <div>
          <CallCenter />
        </div>
      </SIPProvider>
    </div>
  );
}

export default App;
