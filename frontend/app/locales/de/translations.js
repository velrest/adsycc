export default {
  de: 'Deutsch',
  en: 'Englisch',

  global: {
    Username: 'Benutzername',
    Password: 'Passwort',
    save: 'Speichern',
    delete: 'Löschen',
    edit: 'bearbeiten',
    search: 'Suchen',
    empty: 'Keine Einträge gefunden',
    cancel: 'Abbrechen',
    show: 'Anzeigen',
    back: 'Zurück'
  },

  login: {
    login: 'Login',
    'logging-in': 'Login',
    'forgot-password': 'Passwort vergessen?',
    'send-new-password': 'Neues Passwort senden',
    'sent-new-password':
      'Anweisungen zum zurücksetzen des Passwortes wurden an Ihre E-Mail geschickt',
    'your-new-password-is:': 'Dein neues Passwort ist:',
    'missing-identification': 'Bitte geben Sie einen Benutzernamen an',
    'back-to-login': 'Zurück zum Login'
  },

  index: {
    greeting: 'Willkommen im Customer Center',
    'our-tools': 'Unsere Tools',
    'contact-us': 'Kontaktieren Sie uns',
    'create-ticket': 'Support ticket erstellen',
    location: 'Standort {{location}}',
    directions: 'Wegbeschreibung',
    'directions.bs.url':
      'https://www.adfinis-sygroup.ch/de/kontakt/directions-basel.html',
    'directions.be.url':
      'https://www.adfinis-sygroup.ch/de/kontakt/directions-bern.html',
    fax: 'Fax',
    phone: 'Tel',
    tools: {
      redmine: 'Redmine',
      'redmine.description': 'Verwaltung von Tasks, Bugs, etc.',

      gitlab: 'Gitlab',
      'gitlab.description': 'Source Code Verwaltung',

      rt: 'Request Tracker',
      'rt.description': 'Support-Anfragen via Mail',

      poweradmin: 'PowerAdmin',
      'poweradmin.description': 'Verwaltung von DNS Zonen',

      symonitoring: 'SyMonitoring',
      'symonitoring.description': 'Überwachung von Server und Diensten',

      sysupport: 'SySupport',
      'sysupport.description': 'Support Abonnemente',

      ppa: 'PPA',
      'ppa.description': 'Verwaltung ihrer Webhostings',

      rhev: 'RHV',
      'rhev.description': 'Verwaltung ihrer virtuellen Server',

      mailcleaner: 'Mail Cleaner',
      'mailcleaner.description': 'Spam Filter'
    }
  },

  nav: {
    dashboard: 'Übersicht',
    redmine: 'Redmine',
    rt: 'Request Tracker',
    symon: 'SyMonitoring',
    vault: 'Vault',
    sysupport: 'SySupport',
    wikis: 'Wikis',
    settings: 'Einstellungen',
    profile: 'Profil',
    logout: 'Logout'
  },

  redmine: {
    project: 'Projekt',
    status: 'Status',
    priority: 'Priorität',
    subject: 'Betreff',
    updated: 'Zuletzt aktualisiert',

    'list-caption': 'Redmine Tickets von {{host}}',

    error: 'Fehler',
    'error-noprojects': 'Keine Projekte verfügbar'
  },

  rt: {
    status: 'Status',
    subject: 'Betreff',
    updated: 'Zuletzt aktualisiert',
    created: 'Erstellt am',

    'list-caption': 'Request Tracker'
  },

  symon: {
    'list-caption': 'Monitoring',

    host: 'Host',
    status: 'Status',
    messages: 'Nachrichten',

    'host.state': {
      danger: 'Fehler'
    },

    'service.state': {
      danger: 'Fehler',
      warning: 'Warnung'
    }
  },

  vault: {
    metadata: 'Metadaten',
    secrets: 'Secrets',
    add: 'Eintrag hinzufügen',
    'delete-entry': 'Ganzen Eintrag löschen',
    value: 'Wert',
    'save-success': 'Änderungen erfolgreich gespeichert.',
    'clipboard-success': 'Das Passwort wurde in die Zwischenablage kopiert.',
    'clipboard-error':
      'Das Passwort konnte nicht in die Zwischenablage kopiert werden.'
  },

  sysupport: {
    minutes: {
      one: 'Minute',
      other: 'Minuten'
    },
    hours: {
      one: 'Stunde',
      other: 'Stunden'
    },
    index: {
      title: 'Sysupport Abonnements',
      'time.total': 'Totales Guthaben',
      'time.used': 'Gebrauchtes Guthaben',
      charge: 'Aufladen',
      details: 'Details'
    },

    reload: {
      hour: 'Stunden',
      price: 'Preis',
      select: 'Wählen Sie ein Packet aus',
      success: 'Ihre Bestellung wurde erfolgreich veraarbeitet.',
      error:
        'Bei der verarbeitung Ihrer Bestellung ist ein Fehler aufgetreten. Bitte vergewissern Sie sich ob die Bestellung verarbeitet wurde und falls nicht, bersuchen Sie es noch einmal.',
      charge: 'Aufladen'
    },

    detail: {
      expense: 'Aufwände',
      charges: 'Aufladungen',
      date: 'Datum',
      effort: 'Aufwand',
      employee: 'Mitarbeiter',
      description: 'Beschreibung',
      acknowledged: 'Bestätigt',
      amount: 'Anzahl Stunden'
    }
  },

  'user.profile': {
    email: 'E-Mail Adresse',
    services: 'Dienste',
    language: 'Sprache'
  }
}
