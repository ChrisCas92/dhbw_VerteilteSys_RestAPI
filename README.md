# dhbw_VerteilteSys_RestAPI

Thema zur Vorlesung "Verteilte Systeme" an der DHBW Karlsruhe zur Portfolioarbeit.

Themengebiet: LAN Party Anbieter wie z.b. DreamHack

# Konkretes Anwendungsszenario des entwickelten Service mit möglicher Architektureinbindung

Der Service bietet eine Übersicht aller in Deutschland stattfindenden LAN-Parties mit Titel und Veranstaltungsort mit einem einfach Frontend zur visuellen Darstellung. So kann jeder Nutzer die LAN-Parties in Deutschland sehen und für sich über für Ihn ansprechende Events informieren. 

Eine mögliche Architekturnutzung des Services wäre in einer 3-Schichten Architektur - in der ein erweitertes Frontend das sortieren und filtern der Daten ohne eine weitere Kommunikation mit dem Backend erlaubt und in welcher die Datenbank in einem eigenen Container laufen würde damit folgende 3 Schichten entstehen:

* Frontend
* Backend
* Database

Collections:

Veranstaltung - "Veranstaltung Nr., Name, Teilnehmeranzahl, Ort , StartDatum, EndDatum, Einlass, Beginn, Ende"
Teilnehmer - "Teilnehmer Nr. , Name , Vorname, GamerTag, Sitzplatznummer"
Angebotene Spiele - "Name, Max. Spieleranzahl, Min. Spieleranzahl, Preisgeld"
