var dataMenu = {
    hMenu: [
        {label: 'Dati Generali', plugin: 'loadVMenu', menu: 'dati', tooltip: '', class: '', default:1},
        {label: 'Istruttoria Tecnica', plugin: 'loadVMenu', menu: 'it', tooltip: '', class: '', default:0},
        {label: 'Istruttoria Amministrativa', plugin: 'loadVMenu', menu: 'ia', tooltip: '', class: '', default:0},
        {label: 'Titolo', plugin: 'loadVMenu', menu: 'titolo', tooltip: '', class: '', default:0},
        {label: 'Lavori', plugin: 'loadVMenu', menu: 'lavori', tooltip: '', class: '', default:0},
        {label: 'Pagamenti', plugin: 'loadVMenu', menu: 'pagamenti', tooltip: '', class: '', default:0},
        {label: 'Iter', plugin: 'loadVMenu', menu: 'iter', tooltip: '', class: '', default:0}
    ],
    vMenu: {
        dati: [
            {label: 'Avvio Procedimento', plugin: 'loadPage', page: 'avvioproc', tooltip: '', class: '', default:1},
            {label: 'Soggetti', plugin: 'loadPage', page: 'soggetti', tooltip: '', class: '', default:0},
            {label: 'Ubicazione', plugin: 'loadPage', page: 'ubicazione', tooltip: '', class: '', default:0},
            {label: 'Allegati', plugin: 'loadPage', page: 'allegati', tooltip: '', class: '', default:0},
            {label: 'Integrazioni', plugin: 'loadPage', page: 'integrazioni', tooltip: '', class: '', default:0}
        ],
        it: [
            {label: 'Relazione Tecnica', plugin: 'loadPage', page: '', tooltip: '', class: '', default:1},
            {label: 'Parametri Progetto', plugin: 'loadPage', page: '', tooltip: '', class: '', default:0},
            {label: 'Oneri', plugin: 'loadPage', page: '', tooltip: '', class: '', default:0},
            {label: 'Rateizzazione', plugin: 'loadPage', page: '', tooltip: '', class: '', default:0},
            {label: 'FideJussioni', plugin: 'loadPage', page: '', tooltip: '', class: '', default:0}
        ],
        ia: [
            {label: 'Pareri Enti Esterni', plugin: 'loadPage', page: '', tooltip: '', class: '', default:1},
            {label: 'Commissioni', plugin: 'loadPage', page: '', tooltip: '', class: '', default:0},
            {label: 'Asservimenti', plugin: 'loadPage', page: '', tooltip: '', class: '', default:0},
            {label: 'Atti', plugin: 'loadPage', page: '', tooltip: '', class: '', default:0}
        ],
        titolo: [
            {label: 'Titolo', plugin: 'loadPage', page: '', tooltip: '', class: '', default:1},
            {label: 'Voltura', plugin: 'loadPage', page: '', tooltip: '', class: '', default:0}
        ],
        lavori: [
            {label: 'Lavori', plugin: 'loadPage', page: '', tooltip: '', class: '', default:1},
            {label: 'Proroghe', plugin: 'loadPage', page: '', tooltip: '', class: '', default:0}
            
        ],
        pagamenti: [
            {label: 'Importi Dovuti', plugin: 'loadPage', page: '', tooltip: '', class: '', default:1},
            {label: 'Pagamenti', plugin: 'loadPage', page: '', tooltip: '', class: '', default:0},
            {label: 'Scadenze', plugin: 'loadPage', page: '', tooltip: '', class: '', default:0}
        ],
        iter: [
            {label: 'Iter', plugin: 'loadPage', page: '', tooltip: '', class: '', default:1},
            {label: 'Comunicazioni', plugin: 'loadPage', page: '', tooltip: '', class: '', default:0},
            {label: 'Notifiche', plugin: 'loadPage', page: '', tooltip: '', class: '', default:0},
            {label: 'Annotazioni', plugin: 'loadPage', page: '', tooltip: '', class: '', default:0},
            {label: 'Visione Pratiche', plugin: 'loadPage', page: '', tooltip: '', class: '', default:0}
        ]
    }
};

var template = {
    hMenu: '<li class="%(class)s" data-tooltip="%(tooltip)s" data-default="%(default)s"><a href="#" data-plugin="%(plugin)s" data-menu="%(menu)s" >%(label)s</a></li>',
    vMenu: '<li class="%(class)s" data-tooltip="%(tooltip)s" data-group="%(group)s" data-default="%(default)s"><a class="list-group-item" href="#" data-plugin="%(plugin)s" data-page="%(page)s">%(label)s</a></li>'
};

