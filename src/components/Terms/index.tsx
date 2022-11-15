import {
    Text,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Link,
  } from "@chakra-ui/react";
  
  export const Terms = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Link textColor={"grey"} onClick={onOpen}>
          Imprint & Privacy
        </Link>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          motionPreset="slideInBottom"
          scrollBehavior={"inside"}
          size={"full"}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Imprint & Privacy</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontSize={"2xl"}>Imprint</Text>
              <Text>
                Impressum <br></br>
                BTBverse GbR <br></br>
                Geschwister-Scholl-Straße 106 20251 Hamburg<br></br>
                Managing Directors: Kai Rövenich, Florian Seeh, Peter Seeh ‍
                <br></br>
                Contact Information <br></br>
                Email admin@btbverse.xyz
              </Text>
              <br></br>
              <br></br>
              <Text fontSize={"2xl"}>Privacy</Text>
              <Text>
                <p>Datenschutzerkl&auml;rung</p>
                <br></br>
                <p>
                  Personenbezogene Daten (nachfolgend zumeist nur
                  &#8222;Daten&ldquo; genannt) werden von uns nur im Rahmen der
                  Erforderlichkeit sowie zum Zwecke der Bereitstellung eines
                  funktionsf&auml;higen und nutzerfreundlichen Internetauftritts,
                  inklusive seiner Inhalte und der dort angebotenen Leistungen,
                  verarbeitet.
                </p>
                <br></br>
                <p>
                  Gem&auml;&szlig; Art. 4 Ziffer 1. der Verordnung (EU) 2016/679,
                  also der Datenschutz-Grundverordnung (nachfolgend nur
                  &#8222;DSGVO&ldquo; genannt), gilt als
                  &#8222;Verarbeitung&ldquo; jeder mit oder ohne Hilfe
                  automatisierter Verfahren ausgef&uuml;hrter Vorgang oder jede
                  solche Vorgangsreihe im Zusammenhang mit personenbezogenen
                  Daten, wie das Erheben, das Erfassen, die Organisation, das
                  Ordnen, die Speicherung, die Anpassung oder Ver&auml;nderung,
                  das Auslesen, das Abfragen, die Verwendung, die Offenlegung
                  durch &Uuml;bermittlung, Verbreitung oder eine andere Form der
                  Bereitstellung, den Abgleich oder die Verkn&uuml;pfung, die
                  Einschr&auml;nkung, das L&ouml;schen oder die Vernichtung.
                </p>
                <br></br>
                <p>
                  Mit der nachfolgenden Datenschutzerkl&auml;rung informieren wir
                  Sie insbesondere &uuml;ber Art, Umfang, Zweck, Dauer und
                  Rechtsgrundlage der Verarbeitung personenbezogener Daten, soweit
                  wir entweder allein oder gemeinsam mit anderen &uuml;ber die
                  Zwecke und Mittel der Verarbeitung entscheiden. Zudem
                  informieren wir Sie nachfolgend &uuml;ber die von uns zu
                  Optimierungszwecken sowie zur Steigerung der
                  Nutzungsqualit&auml;t eingesetzten Fremdkomponenten, soweit
                  hierdurch Dritte Daten in wiederum eigener Verantwortung
                  verarbeiten.
                </p>
                <br></br>
                <p>Unsere Datenschutzerkl&auml;rung ist wie folgt gegliedert:</p>
                <br></br>
                <p>
                  I. Informationen &uuml;ber uns als Verantwortliche
                  <br />
                  II. Rechte der Nutzer und Betroffenen
                  <br />
                  III. Informationen zur Datenverarbeitung
                </p>
                <br></br>
                <p>I. Informationen &uuml;ber uns als Verantwortliche</p>
                <br></br>
                <p>
                  Verantwortlicher Anbieter dieses Internetauftritts im
                  datenschutzrechtlichen Sinne ist:
                </p>
                <br></br>
                <p>
                  BTBverse GbR
                  <br />
                  Geschwister-Scholl-Stra&szlig;e 106
                  <br />
                  20251 Hamburg
                </p>
                <br></br>
                <p>
                  Managing Directors: Kai R&ouml;venich, Florian Seeh, Peter Seeh
                </p>
                <br></br>
                <p>E-Mail: admin@btbverse.io</p>
                <br></br>
                <p>II. Rechte der Nutzer und Betroffenen</p>
                <br></br>
                <p>
                  Mit Blick auf die nachfolgend noch n&auml;her beschriebene
                  Datenverarbeitung haben die Nutzer und Betroffenen das Recht
                </p>
                <br></br>
                <p>
                  auf Best&auml;tigung, ob sie betreffende Daten verarbeitet
                  werden, auf Auskunft &uuml;ber die verarbeiteten Daten, auf
                  weitere Informationen &uuml;ber die Datenverarbeitung sowie auf
                  Kopien der Daten (vgl. auch Art. 15 DSGVO);
                  <br />
                  auf Berichtigung oder Vervollst&auml;ndigung unrichtiger bzw.
                  unvollst&auml;ndiger Daten (vgl. auch Art. 16 DSGVO);
                  <br />
                  auf unverz&uuml;gliche L&ouml;schung der sie betreffenden Daten
                  (vgl. auch Art. 17 DSGVO), oder, alternativ, soweit eine weitere
                  Verarbeitung gem&auml;&szlig; Art. 17 Abs. 3 DSGVO erforderlich
                  ist, auf Einschr&auml;nkung der Verarbeitung nach Ma&szlig;gabe
                  von Art. 18 DSGVO;
                  <br />
                  auf Erhalt der sie betreffenden und von ihnen bereitgestellten
                  Daten und auf &Uuml;bermittlung dieser Daten an andere
                  Anbieter/Verantwortliche (vgl. auch Art. 20 DSGVO);
                  <br />
                  auf Beschwerde gegen&uuml;ber der Aufsichtsbeh&ouml;rde, sofern
                  sie der Ansicht sind, dass die sie betreffenden Daten durch den
                  Anbieter unter Versto&szlig; gegen datenschutzrechtliche
                  Bestimmungen verarbeitet werden (vgl. auch Art. 77 DSGVO).
                </p>
                <br></br>
                <p>
                  Dar&uuml;ber hinaus ist der Anbieter dazu verpflichtet, alle
                  Empf&auml;nger, denen gegen&uuml;ber Daten durch den Anbieter
                  offengelegt worden sind, &uuml;ber jedwede Berichtigung oder
                  L&ouml;schung von Daten oder die Einschr&auml;nkung der
                  Verarbeitung, die aufgrund der Artikel 16, 17 Abs. 1, 18 DSGVO
                  erfolgt, zu unterrichten. Diese Verpflichtung besteht jedoch
                  nicht, soweit diese Mitteilung unm&ouml;glich oder mit einem
                  unverh&auml;ltnism&auml;&szlig;igen Aufwand verbunden ist.
                  Unbeschadet dessen hat der Nutzer ein Recht auf Auskunft
                  &uuml;ber diese Empf&auml;nger.
                </p>
                <br></br>
                <p>
                  Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO
                  das Recht auf Widerspruch gegen die k&uuml;nftige Verarbeitung
                  der sie betreffenden Daten, sofern die Daten durch den Anbieter
                  nach Ma&szlig;gabe von Art. 6 Abs. 1 lit. f) DSGVO verarbeitet
                  werden. Insbesondere ist ein Widerspruch gegen die
                  Datenverarbeitung zum Zwecke der Direktwerbung statthaft.
                </p>
                <br></br>
                <p>III. Informationen zur Datenverarbeitung</p>
                <br></br>
                <p>
                  Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten
                  werden gel&ouml;scht oder gesperrt, sobald der Zweck der
                  Speicherung entf&auml;llt, der L&ouml;schung der Daten keine
                  gesetzlichen Aufbewahrungspflichten entgegenstehen und
                  nachfolgend keine anderslautenden Angaben zu einzelnen
                  Verarbeitungsverfahren gemacht werden.
                </p>
                <br></br>
                <p>Cookie Manager</p>
                <br></br>
                <p>
                  Zur Einholung einer Einwilligung zum Einsatz von technisch nicht
                  notwendigen Cookies auf der Website, setzt der Anbieter einen
                  Cookie-Manager ein.
                </p>
                <br></br>
                <p>
                  Bei dem Aufruf der Website wird ein Cookie mit den
                  Einstellungsinformationen auf dem Endger&auml;t des Nutzers
                  abgelegt, sodass bei einem weiteren Besuch die Abfrage in Bezug
                  auf die Einwilligung nicht erfolgen muss.
                </p>
                <br></br>
                <p>
                  Das Cookie ist erforderlich um eine rechtskonforme Einwilligung
                  des Nutzers einzuholen.
                </p>
                <br></br>
                <p>
                  Die Installation der Cookies kann der Nutzer durch Einstellungen
                  seines Browsers verhindern bzw. beenden.
                </p>
                <br></br>
                <p>Serverdaten</p>
                <br></br>
                <p>
                  Aus technischen Gr&uuml;nden, insbesondere zur
                  Gew&auml;hrleistung eines sicheren und stabilen
                  Internetauftritts, werden Daten durch Ihren Internet-Browser an
                  uns bzw. an unseren Webspace-Provider &uuml;bermittelt. Mit
                  diesen sog. Server-Logfiles werden u.a. Typ und Version Ihres
                  Internetbrowsers, das Betriebssystem, die Website, von der aus
                  Sie auf unseren Internetauftritt gewechselt haben (Referrer
                  URL), die Website(s) unseres Internetauftritts, die Sie
                  besuchen, Datum und Uhrzeit des jeweiligen Zugriffs sowie die
                  IP-Adresse des Internetanschlusses, von dem aus die Nutzung
                  unseres Internetauftritts erfolgt, erhoben.
                </p>
                <br></br>
                <p>
                  Diese so erhobenen Daten werden vorr&uuml;bergehend gespeichert,
                  dies jedoch nicht gemeinsam mit anderen Daten von Ihnen.
                </p>
                <br></br>
                <p>
                  Diese Speicherung erfolgt auf der Rechtsgrundlage von Art. 6
                  Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der
                  Verbesserung, Stabilit&auml;t, Funktionalit&auml;t und
                  Sicherheit unseres Internetauftritts.
                </p>
                <br></br>
                <p>
                  Die Daten werden sp&auml;testens nach sieben Tage wieder
                  gel&ouml;scht, soweit keine weitere Aufbewahrung zu
                  Beweiszwecken erforderlich ist. Andernfalls sind die Daten bis
                  zur endg&uuml;ltigen Kl&auml;rung eines Vorfalls ganz oder
                  teilweise von der L&ouml;schung ausgenommen.
                </p>
                <br></br>
                <p>Cookies</p>
                <br></br>
                <p>a) Sitzungs-Cookies/Session-Cookies</p>
                <br></br>
                <p>
                  Wir verwenden mit unserem Internetauftritt sog. Cookies. Cookies
                  sind kleine Textdateien oder andere Speichertechnologien, die
                  durch den von Ihnen eingesetzten Internet-Browser auf Ihrem
                  Endger&auml;t ablegt und gespeichert werden. Durch diese Cookies
                  werden im individuellen Umfang bestimmte Informationen von
                  Ihnen, wie beispielsweise Ihre Browser- oder Standortdaten oder
                  Ihre IP-Adresse, verarbeitet.
                </p>
                <br></br>
                <p>
                  Durch diese Verarbeitung wird unser Internetauftritt
                  benutzerfreundlicher, effektiver und sicherer, da die
                  Verarbeitung bspw. die Wiedergabe unseres Internetauftritts in
                  unterschiedlichen Sprachen oder das Angebot einer
                  Warenkorbfunktion erm&ouml;glicht.
                </p>
                <br></br>
                <p>
                  Rechtsgrundlage dieser Verarbeitung ist Art. 6 Abs. 1 lit b.)
                  DSGVO, sofern diese Cookies Daten zur Vertragsanbahnung oder
                  Vertragsabwicklung verarbeitet werden.
                </p>
                <br></br>
                <p>
                  Falls die Verarbeitung nicht der Vertragsanbahnung oder
                  Vertragsabwicklung dient, liegt unser berechtigtes Interesse in
                  der Verbesserung der Funktionalit&auml;t unseres
                  Internetauftritts. Rechtsgrundlage ist in dann Art. 6 Abs. 1
                  lit. f) DSGVO.
                </p>
                <br></br>
                <p>
                  Mit Schlie&szlig;en Ihres Internet-Browsers werden diese
                  Session-Cookies gel&ouml;scht.
                </p>
                <br></br>
                <p>b) Drittanbieter-Cookies</p>
                <br></br>
                <p>
                  Gegebenenfalls werden mit unserem Internetauftritt auch Cookies
                  von Partnerunternehmen, mit denen wir zum Zwecke der Werbung,
                  der Analyse oder der Funktionalit&auml;ten unseres
                  Internetauftritts zusammenarbeiten, verwendet.
                </p>
                <br></br>
                <p>
                  Die Einzelheiten hierzu, insbesondere zu den Zwecken und den
                  Rechtsgrundlagen der Verarbeitung solcher Drittanbieter-Cookies,
                  entnehmen Sie bitte den nachfolgenden Informationen.
                </p>
                <br></br>
                <p>c) Beseitigungsm&ouml;glichkeit</p>
                <br></br>
                <p>
                  Sie k&ouml;nnen die Installation der Cookies durch eine
                  Einstellung Ihres Internet-Browsers verhindern oder
                  einschr&auml;nken. Ebenfalls k&ouml;nnen Sie bereits
                  gespeicherte Cookies jederzeit l&ouml;schen. Die hierf&uuml;r
                  erforderlichen Schritte und Ma&szlig;nahmen h&auml;ngen jedoch
                  von Ihrem konkret genutzten Internet-Browser ab. Bei Fragen
                  benutzen Sie daher bitte die Hilfefunktion oder Dokumentation
                  Ihres Internet-Browsers oder wenden sich an dessen Hersteller
                  bzw. Support. Bei sog. Flash-Cookies kann die Verarbeitung
                  allerdings nicht &uuml;ber die Einstellungen des Browsers
                  unterbunden werden. Stattdessen m&uuml;ssen Sie insoweit die
                  Einstellung Ihres Flash-Players &auml;ndern. Auch die
                  hierf&uuml;r erforderlichen Schritte und Ma&szlig;nahmen
                  h&auml;ngen von Ihrem konkret genutzten Flash-Player ab. Bei
                  Fragen benutzen Sie daher bitte ebenso die Hilfefunktion oder
                  Dokumentation Ihres Flash-Players oder wenden sich an den
                  Hersteller bzw. Benutzer-Support.
                </p>
                <br></br>
                <p>
                  Sollten Sie die Installation der Cookies verhindern oder
                  einschr&auml;nken, kann dies allerdings dazu f&uuml;hren, dass
                  nicht s&auml;mtliche Funktionen unseres Internetauftritts
                  vollumf&auml;nglich nutzbar sind.
                </p>
                <br></br>
                <p>Newsletter</p>
                <br></br>
                <p>
                  Falls Sie sich f&uuml;r unseren kostenlosen Newsletter anmelden,
                  werden die von Ihnen hierzu abgefragten Daten, also Ihre
                  E-Mail-Adresse sowie &ndash; optional &ndash; Ihr Name und Ihre
                  Anschrift, an uns &uuml;bermittelt. Gleichzeitig speichern wir
                  die IP-Adresse des Internetanschlusses von dem aus Sie auf
                  unseren Internetauftritt zugreifen sowie Datum und Uhrzeit Ihrer
                  Anmeldung. Im Rahmen des weiteren Anmeldevorgangs werden wir
                  Ihre Einwilligung in die &Uuml;bersendung des Newsletters
                  einholen, den Inhalt konkret beschreiben und auf diese
                  Datenschutzerkl&auml;rung verwiesen. Die dabei erhobenen Daten
                  verwenden wir ausschlie&szlig;lich f&uuml;r den
                  Newsletter-Versand &ndash; sie werden deshalb insbesondere auch
                  nicht an Dritte weitergegeben.
                </p>
                <br></br>
                <p>Rechtsgrundlage hierbei ist Art. 6 Abs. 1 lit. a) DSGVO.</p>
                <br></br>
                <p>
                  Die Einwilligung in den Newsletter-Versand k&ouml;nnen Sie
                  gem&auml;&szlig; Art. 7 Abs. 3 DSGVO jederzeit mit Wirkung
                  f&uuml;r die Zukunft widerrufen. Hierzu m&uuml;ssen Sie uns
                  lediglich &uuml;ber Ihren Widerruf in Kenntnis setzen oder den
                  in jedem Newsletter enthaltenen Abmeldelink bet&auml;tigen.
                </p>
                <br></br>
                <p>Kontaktanfragen / Kontaktm&ouml;glichkeit</p>
                <br></br>
                <p>
                  Sofern Sie per Kontaktformular oder E-Mail mit uns in Kontakt
                  treten, werden die dabei von Ihnen angegebenen Daten zur
                  Bearbeitung Ihrer Anfrage genutzt. Die Angabe der Daten ist zur
                  Bearbeitung und Beantwortung Ihre Anfrage erforderlich &ndash;
                  ohne deren Bereitstellung k&ouml;nnen wir Ihre Anfrage nicht
                  oder allenfalls eingeschr&auml;nkt beantworten.
                </p>
                <br></br>
                <p>
                  Rechtsgrundlage f&uuml;r diese Verarbeitung ist Art. 6 Abs. 1
                  lit. b) DSGVO.
                </p>
                <br></br>
                <p>
                  Ihre Daten werden gel&ouml;scht, sofern Ihre Anfrage
                  abschlie&szlig;end beantwortet worden ist und der L&ouml;schung
                  keine gesetzlichen Aufbewahrungspflichten entgegenstehen, wie
                  bspw. bei einer sich etwaig anschlie&szlig;enden
                  Vertragsabwicklung.
                </p>
                <br></br>
                <p>Google Analytics</p>
                <br></br>
                <p>
                  In unserem Internetauftritt setzen wir Google Analytics ein.
                  Hierbei handelt es sich um einen Webanalysedienst der Google
                  Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland,
                  nachfolgend nur &#8222;Google&ldquo; genannt.
                </p>
                <br></br>
                <p>
                  Der Dienst Google Analytics dient zur Analyse des
                  Nutzungsverhaltens unseres Internetauftritts. Rechtsgrundlage
                  ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse
                  liegt in der Analyse, Optimierung und dem wirtschaftlichen
                  Betrieb unseres Internetauftritts.
                </p>
                <br></br>
                <p>
                  Nutzungs- und nutzerbezogene Informationen, wie bspw.
                  IP-Adresse, Ort, Zeit oder H&auml;ufigkeit des Besuchs unseres
                  Internetauftritts, werden dabei an einen Server von Google in
                  den USA &uuml;bertragen und dort gespeichert. Allerdings nutzen
                  wir Google Analytics mit der sog. Anonymisierungsfunktion. Durch
                  diese Funktion k&uuml;rzt Google die IP-Adresse schon innerhalb
                  der EU bzw. des EWR.
                </p>
                <br></br>
                <p>
                  Die so erhobenen Daten werden wiederum von Google genutzt, um
                  uns eine Auswertung &uuml;ber den Besuch unseres
                  Internetauftritts sowie &uuml;ber die dortigen
                  Nutzungsaktivit&auml;ten zur Verf&uuml;gung zu stellen. Auch
                  k&ouml;nnen diese Daten genutzt werden, um weitere
                  Dienstleistungen zu erbringen, die mit der Nutzung unseres
                  Internetauftritts und der Nutzung des Internets
                  zusammenh&auml;ngen.
                </p>
                <br></br>
                <p>
                  Google gibt an, Ihre IP-Adresse nicht mit anderen Daten zu
                  verbinden. Zudem h&auml;lt Google unter
                  https://www.google.com/intl/de/policies/privacy/partners weitere
                  datenschutzrechtliche Informationen f&uuml;r Sie bereit, so
                  bspw. auch zu den M&ouml;glichkeiten, die Datennutzung zu
                  unterbinden.
                </p>
                <br></br>
                <p>
                  Zudem bietet Google unter
                  https://tools.google.com/dlpage/gaoptout?hl=de ein sog.
                  Deaktivierungs-Add-on nebst weiteren Informationen hierzu an.
                  Dieses Add-on l&auml;sst sich mit den g&auml;ngigen
                  Internet-Browsern installieren und bietet Ihnen weitergehende
                  Kontrollm&ouml;glichkeit &uuml;ber die Daten, die Google bei
                  Aufruf unseres Internetauftritts erfasst. Dabei teilt das Add-on
                  dem JavaScript (ga.js) von Google Analytics mit, dass
                  Informationen zum Besuch unseres Internetauftritts nicht an
                  Google Analytics &uuml;bermittelt werden sollen. Dies verhindert
                  aber nicht, dass Informationen an uns oder an andere
                  Webanalysedienste &uuml;bermittelt werden. Ob und welche
                  weiteren Webanalysedienste von uns eingesetzt werden, erfahren
                  Sie nat&uuml;rlich ebenfalls in dieser
                  Datenschutzerkl&auml;rung.
                </p>
                <br></br>
                <p>IONOS Tracking MYWEBSITE</p>
                <br></br>
                <p>
                  In unserem Internetauftritt setzen wir MyWebsite ein. Hierbei
                  handelt es sich um einen Dienst der 1&amp;1 IONOS SE,
                  Elgendorfer Str. 57, 56410 Montabaur, nachfolgend nur
                  &#8222;MyWebsite&ldquo; genannt.
                </p>
                <br></br>
                <p>
                  Durch MyWebsite werden Tracking-Cookies &uuml;ber Ihren
                  Internet-Browser Cookies auf Ihrem Endger&auml;t gespeichert,
                  die auf der Technologie Snowplow Analytics von der Snowplow
                  Analytics Limited, 32-38, Scrutton Street, London,
                  Gro&szlig;britannien, basieren. Mit Hilfe dieser Cookies kann z.
                  B. ausgewertet werden, wie h&auml;ufig Sie unseren
                  Internetauftritt besuchen oder welche (Unter-) Seiten unseres
                  Internetauftritts aufgerufen werden. Die 1&amp;1 IONOS SE gibt
                  hierzu an, dass dabei keinerlei personenbezogene Daten erfasst
                  w&uuml;rden.
                </p>
                <br></br>
                <p>
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser
                  berechtigtes Interesse liegt in der Verbesserung und Optimierung
                  unseres Internetauftritts.
                </p>
                <br></br>
                <p>
                  Falls Sie mit dieser Verarbeitung nicht einverstanden sind,
                  haben Sie die M&ouml;glichkeit, die Speicherung der Cookies
                  durch eine Einstellung in Ihrem Internet-Browsers zu verhindern.
                  N&auml;here Informationen hierzu finden Sie vorstehend unter
                  &#8222;Cookies&ldquo;.
                </p>
                <br></br>
                <p>IONOS WebAnalytics</p>
                <br></br>
                <p>
                  In unserem Internetauftritt setzen wir WebAnalytics ein. Hierbei
                  handelt es sich um einen Analyse-Dienst der 1&amp;1 IONOS SE,
                  Elgendorfer Str. 57, 56410 Montabaur, Deutschland, nachfolgend
                  nur &#8222;WebAnalytics&ldquo; genannt, mit dem wir die
                  Benutzung unseres Internetauftritts analysieren k&ouml;nnen.
                </p>
                <br></br>
                <p>
                  Zur Analyse werden anhand eines Pixels oder &uuml;ber die
                  Logfiles in unserem Auftrag Daten &uuml;ber Typ und Version
                  Ihres Internetbrowsers, Ihr Betriebssystem, der Typ Ihres
                  Endger&auml;tes, die Website, von der aus Sie auf unseren
                  Internetauftritt gewechselt haben (Referrer URL), die Website(s)
                  unseres Internetauftritts, die Sie besuchen, oder die Dateien,
                  die Sie anfordern, Datum und Uhrzeit des jeweiligen Zugriffs
                  sowie die anonymisierte IP-Adresse des Internetanschlusses, von
                  dem aus die Nutzung unseres Internetauftritts erfolgt, erhoben.
                </p>
                <br></br>
                <p>
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser
                  berechtigtes Interesse liegt in der Analyse, Optimierung,
                  Verbesserung sowie in dem wirtschaftlichen Betrieb unseres
                  Internetauftritts.
                </p>
              </Text>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  