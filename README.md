# WED 2 Spick 
run the following commands: 
- `` npm i``
- `` npm run sass``

Der Spick verwendet ein flexbox ``column wrap`` Layout, folgendes muss beachtet werden: 
- Für den Druck ist es wichtig, das die Breite der Columns fix und in cm gesetzt sind.
- Wenn eine Spalte die maximale Höhe übersteigt rutscht das unterste Element in die nächste Column, das macht den Druck kaputt, Breiten müssen dann entsprechend angepasst werden oder Elements gelöscht werden.