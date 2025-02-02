import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk"; // 

export function useTelegram() {
  const [tg, setTg] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") { 
        WebApp.ready();
        setTg(WebApp);
    }
  }, []);

  return { tg };
}
