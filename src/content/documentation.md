# Dokumentation 

Diese Internetseite wird über die Hostingplatform Render bereitgestellt. Im nachfolgenden ein Überblick über den Tech-Stack, der für dieses Projekt verwendet wurde. 

## Verwendete Technologien

- **React (Javascript):** Bin ich vertraut mit, da ich es in anderen Projekten verwendet habe. Kein TSX mit Hinblick auf spätere Aufgaben die Tensorflowjs verwenden.
- **Vite:** Schnelles Build-Tool.
- **Tailwind CSS:** Einfache und schnelle Möglichkeiten zur Gestaltung der Webanwendung ohne CSS schreiben zu müssen.
- **shadcn/ui:** Dient dazu, dass Komponenten, Hover-Effekte und Animationen nicht selbst implementieren werden müssen.
- **ml5.js:** Vorgabe.
- **Phosphor Icons:** Umfangreiche, schöne und kostenlose Icon-Library. Bessere Alternative zu FontAwesome meiner Meinung nach.
- **markdown-to-jsx:** Um Markdown in React-Komponenten umzuwandeln. Verwendet um die Dokumentation und Diskussion einfach in Markdown-Dokumenten zu schreiben und in die Wewanwendung rendern zu lassen.

## Anleitung

Die vorgeladenen Bilder können über den Button "Klassifizieren" klassifiziert werden. Wie die Aufgabenstellung vorsieht sind die ersten 3 Bilder korrekt klassifiziert, die restlichen nicht. 

Weiter unten auf der Seite ist eine Uploadfunktion verfügbar. Hier kann ein eigenes Bild hochgeladen und klassifiziert werden. Diese Bilder werden in einem UseState gespeichert und bleiben vorhanden solange die Seite nicht aktualisiert wird. Nach Seitenrefresh sind die Bilder nicht mehr verfügbar und müssen erneut hochgeladen werden.