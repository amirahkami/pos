# POS
Point of Sale

### Live Demo
Verfügbar auf [GitHub Pages](https://amirahkami.github.io/pos/).

### Aufgabe für Frontend

Es ist ein unter der Verwendung von Typescript ein typsicheres JavaScript Programm zu erstellen. Als Frontend Framework soll bevorzugt Vue oder alternativ React verwendet werden.

Das Programm soll zwei Eingabefelder „zu zahlen“ und „gegeben“ beinhalten. Anzeige: Rechtsbündig, als Währung formatiert, eingegebene Werte rechts angehängt. Die Beträge sind in Eurocent einzugeben. (Beispiel: 6297 für 62.97 EUR)
Minimum ist 1 Maximum ist 100000

Als Kassierer möchte ich die Differenz zwischen „zu zahlen“ und „gegeben“ ablesen können. Dazu möchte ich in dem „zu zahlen“ Feld mit der Maus über einen Ziffernblock den Betrag eingeben können, den ein Kunde zahlen muss.
Durch Drücken der Enter Taste im Feld „zu zahlen“ soll die Eingabe des Betrages beendet werden.

Um mir unnötige Eingaben zu ersparen, soll das Programm mir max. 5 Buttons mit Beträgen neben dem Ziffernblock anzeigen, die der Kunde mir voraussichtlich geben wird.

Danach möchte ich auf einen der Button drücken oder alternativ über den Ziffernblock den Betrag eingeben, den der Kunde mir gibt.

In einem modalen Fenster (freie Design Wahl) soll das Programm mir das Rückgeld anzeigen. Nach dem Schließen des Fensters kann ich mit einer erneuten Eingabe beginnen.

Beispiel:
Der Kunde hat 89,90€ zu bezahlen.
Für diese Zahlung wäre die folgende Kombination der Buttons denkbar:
89,90 – 90,00 – 100,00 – 200,00

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
