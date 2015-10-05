var dataMenu = {
    hMenu: [
        {label: 'Dati Generali', plugin: 'loadVMenu', menu: 'dati', tooltip: '', class: ''},
        {label: 'Istruttoria Tecnica', plugin: 'loadVMenu', menu: 'it', tooltip: '', class: ''},
        {label: 'Istruttoria Amministrativa', plugin: 'loadVMenu', menu: 'ia', tooltip: '', class: ''},
        {label: 'Titolo', plugin: 'loadVMenu', menu: 'titolo', tooltip: '', class: ''},
        {label: 'Lavori', plugin: 'loadVMenu', menu: 'lavori', tooltip: '', class: ''},
        {label: 'Pagamenti', plugin: 'loadVMenu', menu: 'pagamenti', tooltip: '', class: ''},
        {label: 'Iter', plugin: 'loadVMenu', menu: 'iter', tooltip: '', class: ''}
    ],
    vMenu: {
        dati: [
            {label: 'Avvio Procedimento', plugin: 'loadPage', page: '', tooltip: '', class: ''},
            {label: 'Soggetti', plugin: 'loadPage', page: '', tooltip: '', class: ''},
            {label: 'Ubicazione', plugin: 'loadPage', page: '', tooltip: '', class: ''},
            {label: 'Allegati', plugin: 'loadPage', page: '', tooltip: '', class: ''},
            {label: 'Integrazioni', plugin: 'loadPage', page: '', tooltip: '', class: ''}
        ],
        it: [
            {label: 'Relazione Tecnica', plugin: 'loadPage', page: '', tooltip: '', class: ''},
            {label: 'Parametri Progetto', plugin: 'loadPage', page: '', tooltip: '', class: ''},
            {label: 'Oneri', plugin: 'loadPage', page: '', tooltip: '', class: ''},
            {label: 'Rateizzazione', plugin: 'loadPage', page: '', tooltip: '', class: ''},
            {label: 'FideJussioni', plugin: 'loadPage', page: '', tooltip: '', class: ''}
        ],
        ia: [
            {label: 'Pareri Enti Esterni', plugin: 'loadPage', page: '', tooltip: '', class: ''},
            {label: 'Commissioni', plugin: 'loadPage', page: '', tooltip: '', class: ''},
            {label: 'Asservimenti', plugin: 'loadPage', page: '', tooltip: '', class: ''},
            {label: 'Atti', plugin: 'loadPage', page: '', tooltip: '', class: ''}
        ],
        titolo: [
            {label: 'Titolo', plugin: 'loadPage', page: '', tooltip: '', class: ''},
            {label: 'Voltura', plugin: 'loadPage', page: '', tooltip: '', class: ''}
        ],
        lavori: [
            {label: 'Lavori', plugin: 'loadPage', page: '', tooltip: '', class: ''},
            {label: 'Proroghe', plugin: 'loadPage', page: '', tooltip: '', class: ''},
            
        ],
        pagamenti: [
            {label: 'Importi Dovuti', plugin: 'loadPage', page: '', tooltip: '', class: ''},
            {label: 'Pagamenti', plugin: 'loadPage', page: '', tooltip: '', class: ''},
            {label: 'Scadenze', plugin: 'loadPage', page: '', tooltip: '', class: ''}
        ],
        iter: [
            {label: 'Iter', plugin: 'loadPage', page: '', tooltip: '', class: ''},
            {label: 'Comunicazioni', plugin: 'loadPage', page: '', tooltip: '', class: ''},
            {label: 'Notifiche', plugin: 'loadPage', page: '', tooltip: '', class: ''},
            {label: 'Annotazioni', plugin: 'loadPage', page: '', tooltip: '', class: ''},
            {label: 'Visione Pratiche', plugin: 'loadPage', page: '', tooltip: '', class: ''}
        ]
    }
};

var template = {
    hMenu: '<li class="%(class)s" data-tooltip="%(tooltip)s"><a href="#" data-plugin="%(plugin)s" data-menu="%(menu)s" >%(label)s</a></li>',
    vMenu: '<li class="%(class)s" data-tooltip="%(tooltip)s"><a class="list-group-item" href="#" data-plugin="%(plugin)s" data-menu="%(page)s">%(label)s</a></li>'
};

