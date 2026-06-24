import React from "react";
import "./Smart light.css";

const SmartLight = () => (
  <div className="smartlight-container">
    <h1>Piano per l’Ottimizzazione dei Semafori di Pisa con Intelligenza Artificiale</h1>
    <section>
      <h2>Obiettivo del progetto</h2>
      <p>
        Ottimizzare i tempi di attesa e la sicurezza ai semafori di Pisa, migliorando la fluidità del traffico veicolare, garantendo la sicurezza dei pedoni (inclusi turisti, anziani e persone con disabilità) e riducendo l’impatto ambientale. Il sistema utilizza sensori separati collegati alla rete e ai semafori esistenti, con algoritmi di intelligenza artificiale per una gestione dinamica.
      </p>
    </section>
    <section>
      <h2>1. Analisi preliminare e raccolta dati</h2>
      <ul>
        <li><b>Mappatura degli incroci:</b> Identificazione di 30-40 incroci chiave con QGIS.</li>
        <li><b>Raccolta dati:</b>
          <ul>
            <li>Dati storici (Pisamo): flussi veicolari, incidenti, tempi di attesa.</li>
            <li>Dati in tempo reale: sensori temporanei per 4 settimane su flusso veicolare, pedonale e condizioni ambientali.</li>
          </ul>
        </li>
        <li><b>Coinvolgimento stakeholder:</b> Collaborazione con Comune, Pisamo, Università e associazioni locali.</li>
        <li><b>Analisi infrastrutture esistenti:</b> Valutazione semafori per integrazione sensori.</li>
      </ul>
    </section>
    <section>
      <h2>2. Sensoristica</h2>
      <ul>
        <li><b>Telecamere IP:</b> Rilevano veicoli, ciclisti e pedoni; GDPR-compliant.</li>
        <li><b>LiDAR:</b> Mappe 3D di pedoni e veicoli, ideale per privacy.</li>
        <li><b>Radar:</b> Misura velocità e direzione dei veicoli.</li>
        <li><b>Sensori ambientali:</b> Monitoraggio CO2, particolato e rumore.</li>
        <li><b>Integrazione:</b> Connessione 5G, alimentazione solare, installazione su pali esistenti.</li>
      </ul>
    </section>
    <section>
      <h2>3. Algoritmi di Intelligenza Artificiale</h2>
      <ul>
        <li><b>YOLOv8:</b> Visione artificiale per rilevamento oggetti e situazioni critiche.</li>
        <li><b>Reinforcement Learning (DQN):</b> Ottimizzazione cicli semaforici in tempo reale.</li>
        <li><b>Pipeline dati:</b> Sensori → Cloud → Elaborazione IA → Regolazione semafori.</li>
      </ul>
    </section>
    <section>
      <h2>4. Progettazione del sistema</h2>
      <ul>
        <li><b>Semafori esistenti:</b> Aggiornamento hardware e funzionalità smart.</li>
        <li><b>Centrale di controllo:</b> Gestione dati su AWS IoT Core, dashboard Tableau.</li>
        <li><b>Funzionalità:</b> Priorità pedonale, trasporti pubblici, gestione emergenze, sostenibilità.</li>
        <li><b>Esempi:</b>
          <ul>
            <li>Via Corridoni: -15% tempi di attesa, +20% sicurezza pedonale.</li>
            <li>Piazza dei Miracoli: Attraversamenti sicuri per il 95% dei pedoni.</li>
          </ul>
        </li>
      </ul>
    </section>
    <section>
      <h2>5. Sperimentazione pilota</h2>
      <ul>
        <li><b>Incroci selezionati:</b> Via Corridoni, Lungarno Pacinotti, Piazza dei Miracoli.</li>
        <li><b>Durata:</b> 3 mesi.</li>
        <li><b>Attività:</b> Installazione sensori, addestramento IA, monitoraggio KPI, feedback cittadini.</li>
        <li><b>Risultati attesi:</b>
          <ul>
            <li>-15% tempi di attesa</li>
            <li>+25% sicurezza pedonale</li>
            <li>-10% emissioni CO2</li>
          </ul>
        </li>
      </ul>
    </section>
    <section>
      <h2>6. Implementazione su larga scala</h2>
      <ul>
        <li><b>Estensione:</b> 30-40 incroci.</li>
        <li><b>Integrazione smart city:</b> Collegamento con smart parking e illuminazione.</li>
        <li><b>Formazione e manutenzione:</b> Corsi per Pisamo, manutenzione predittiva IA.</li>
        <li><b>Costi stimati:</b>
          <ul>
            <li>Sensori per incrocio: 15.000 €</li>
            <li>Aggiornamenti semafori: 10.000 € per incrocio</li>
            <li>Sviluppo software: 100.000 €</li>
            <li>Pilota (3 incroci): 75.000 €</li>
            <li>Città (40 incroci): 1,4 milioni €</li>
          </ul>
        </li>
      </ul>
    </section>
    <section>
      <h2>7. Valutazione e miglioramento continuo</h2>
      <ul>
        <li>Monitoraggio KPI, aggiornamenti IA, coinvolgimento comunità.</li>
        <li><b>Benefici:</b> Sostenibilità, inclusione, sicurezza, innovazione, collaborazione locale.</li>
        <li><b>Sfide:</b> Privacy, costi, accettazione pubblica.</li>
      </ul>
    </section>
    <section>
      <h2>Collaborazioni</h2>
      <ul>
        <li>Università di Pisa: Sviluppo algoritmi IA.</li>
        <li>Brain Computing: Software personalizzato.</li>
        <li>Pisamo e Comune di Pisa: Supporto logistico.</li>
      </ul>
    </section>
    <section>
      <h2>Conclusione</h2>
      <p>
        Il progetto utilizza sensori separati e IA avanzata per ottimizzare i semafori di Pisa, con una sperimentazione pilota in 3 incroci e successiva espansione. Risponde agli obiettivi di mobilità sostenibile, rendendo Pisa più smart, sicura e sostenibile.
      </p>
    </section>
    <section className="smartlight-notes">
      <h3>Note a piè di pagina</h3>
      <ol>
        <li>ENEA, "Smart Road: Tecnologie per la Mobilità Sostenibile," 2023.</li>
        <li>KI4PED, "Pedestrian Safety with AI and LiDAR," 2022.</li>
        <li>Ajuntament de Barcelona, "Smart Traffic Management," 2021.</li>
        <li>KI4LSA, "AI-Based Traffic Light Control," 2021.</li>
        <li>Google, "Green Light Project," 2023.</li>
        <li>Axilion, "Transit Signal Priority," 2022.</li>
        <li>Stima costi sensori: Hikvision, Velodyne, Smartmicro, Bosch.</li>
        <li>Stima aggiornamento semafori intelligenti.</li>
        <li>Collaborazioni accademiche per sviluppo software IA.</li>
      </ol>
    </section>
  </div>
);

export default SmartLight;
