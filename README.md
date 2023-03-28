# dhbw_VerteilteSys_RestAPI

Thema zur Vorlesung "Verteilte Systeme" an der DHBW Karlsruhe zur Portfolioarbeit.

Themengebiet: LAN Party Anbieter wie z.b. DreamHack

# Konkretes Anwendungsszenario des entwickelten Service mit möglicher Architektureinbindung

Der Service bietet eine Übersicht aller in Deutschland stattfindenden LAN-Parties mit Titel und Veranstaltungsort mit einem einfach Frontend zur visuellen Darstellung. So kann jeder Nutzer die LAN-Parties in Deutschland sehen und für sich über für Ihn ansprechende Events informieren.

Eine mögliche Architekturnutzung des Services wäre in einer 3-Schichten Architektur - in der ein erweitertes Frontend das sortieren und filtern der Daten ohne eine weitere Kommunikation mit dem Backend erlaubt und in welcher die Datenbank in einem eigenen Container laufen würde damit folgende 3 Schichten entstehen:

- Frontend
- Backend
- Database

# Mögliche Probleme des Service bei Verwendung von mehreren Parteien

## Konflikte bei der Ressourcennutzung:

Wenn mehrere Parteien auf dieselbe Ressource zugreifen und Änderungen daran vornehmen, kann es zu Konflikten kommen. Ein Beispiel wäre, wenn zwei Benutzer gleichzeitig versuchen, dieselbe Ressource zu aktualisieren. Dies kann dazu führen, dass eine der Änderungen verloren geht oder inkonsistente Daten erzeugt werden.

### Mögliche Lösung

Konflikte bei der Ressourcennutzung können durch die Implementierung von Locking-Mechanismen oder Transaktionsisolation vermieden werden, die sicherstellen, dass immer nur eine Partei Änderungen an einer Ressource vornehmen kann. Alternativ kann die API so gestaltet werden, dass Konflikte vermieden werden, indem z.B. jeder Benutzer nur bestimmte Teile der Ressource ändern kann.

## Unvorhersehbare Änderungen

Unvorhersehbare Auswirkungen von Änderungen: Änderungen an der API können unvorhersehbare Auswirkungen auf andere Nutzer haben. Wenn beispielsweise eine API-Route entfernt wird, die von einer anderen Anwendung verwendet wird, kann dies dazu führen, dass die Anwendung nicht mehr funktioniert.

### Mögliche Lösung

Unvorhersehbare Auswirkungen von Änderungen können durch sorgfältige Planung und Überwachung der Änderungen minimiert werden. Bevor Änderungen an der API vorgenommen werden, sollten Tests durchgeführt werden, um sicherzustellen, dass alle Funktionen weiterhin ordnungsgemäß funktionieren. Eine gute Dokumentation der Änderungen und ihrer Auswirkungen kann auch dazu beitragen, dass andere Benutzer besser vorbereitet sind.

# Wichtig zu beachten bei einer Produktiv-Setzung des Services

## Skalierbarkeit

Der Dienst sollte so entwickelt und konfiguriert werden, dass er leicht skaliert werden kann, um eine große Anzahl von Anfragen und Benutzern zu verarbeiten. Zu diesem Zweck können Technologien wie Load Balancer, Cloud Services und Caching-Mechanismen eingesetzt werden, um eine schnelle und zuverlässige Bereitstellung der API zu gewährleisten.

## Sicherheit

Eine REST-API kann eine Vielzahl von Sicherheitsrisiken bergen, wie z.B. Angriffe durch unberechtigten Zugriff, Datenmanipulation und Denial of Service (DoS)-Angriffe. Um diese Risiken zu minimieren, sollten Sicherheitsmaßnahmen wie Authentifizierung, Autorisierung, Verschlüsselung und Validierung der Eingaben in den Service implementiert werden. Zurzeit ist eine Veränderung der Daten ohne Authentifizierung möglich.

# Folgende 3 Collections existieren im Service:

- Veranstaltung - "Veranstaltung Nr., Name, Teilnehmeranzahl, Ort , StartDatum, EndDatum, Einlass, Beginn, Ende"
- Teilnehmer - "Teilnehmer Nr. , Name , Vorname, GamerTag, Sitzplatznummer"
- Angebotene Spiele - "Name, Max. Spieleranzahl, Min. Spieleranzahl, Preisgeld"
