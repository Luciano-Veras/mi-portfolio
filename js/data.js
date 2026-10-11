const portfolioData = {
    profile: {
        name: "Luciano Veras",
        profession: "Administrador",
        contact: {
            email: "lucianoveras.dev@gmail.com",
            phone: "3512594009",
            location: "Córdoba, Argentina",
            linkedin: "https://www.linkedin.com/in/luciano-veras",
            github: "https://github.com/Luciano-Veras"
        },
        headline: "Gestión integral de empresas",
        about: "Cuento con una sólida trayectoria de 8 años en administración de empresas, especializándome en la gestión integral de operaciones administrativas y financieras a través de sistemas ERP. Mi gestón abarca la dirección del ciclo completo de compras, facturación de ventas. Poseo amplia experiencia en el manejo de cuentas corrientes, coordinando eficientemente el pago a proveedores y las cobranzas a clientes. Asimismo, realizo la gestión de recursos humanos mediante el sistema biométrico CrossChex Cloud y participo de manera activa en la estructuración de los costos operativos de la empresa.",
        development: "A nivel personal, disfruto explorar nuevas herramientas que potencien mi capacidad de gestión. Por eso, de manera autodidacta dedico tiempo a formarme en programación, Power BI y Data Science, buscando siempre aprender y sumar nuevas perspectivas a mi desarrollo profesional.",
        mission: "Mi objetivo profesional es servir al equipo aportando todos mis conocimientos ofreciendo un enfoque estructurado y metódico para resolver desafíos."
    },
    experience: [
        {
            role: "Administrador",
            company: "Productos Plin SRL",
            dates: "Abr 2021 — Actualmente",
            achievements: [
                "<b>Logro destacado (ERP):</b> Implementación del ERP para llevar el control de caja y bancos directamente en el sistema, eliminando el uso de planillas manuales. Amplié el uso del ERP —originalmente limitado a tareas operativas básicas— para gestionar cuentas contables de forma integral, permitiendo acceder a información financiera mas precisa y estructurada ante las necesidades de gerencia.",
                "<b>Gestión financiera y costos:</b> Desarrollo planillas de costos con datos codificados vinculados al ERP, para lograr una estructura de costos clara que respalde los objetivos financieros de gerencia. Seguimiento de cuentas por cobrar y por pagar en conjunto con gerencia, manteniendo el orden de los recursos financieros de la empresa.",
                "<b>Gestión estratégica y negociación::</b> Liderazgo del ciclo de abastecimiento y negociación directa con proveedores. Evaluación de propuestas y administración de acuerdos orientados a la optimización de costos.",
                "<b>Desarrollo de proveedores:</b> Búsqueda, evaluación y desarrollo de proveedores estratégicos para la obtención de materias primas. Coordinación con Dirección para gestionar los recursos que aseguren la concreción de operaciones, y trabajo conjunto con el departamento de Calidad para garantizar que la materia prima cumpla con los requisitos técnicos y los estándares del producto final.",
                "<b>Coordinación operativa: </b> Participación activa en proyectos de desarrollo productivo (nuevos productos), articulando el abastecimiento de insumos necesarios para potenciar el crecimiento de la empresa, reducir la capacidad ociosa y promover la mejora continua.",
                "<b>Visión sistémica de costos: </b>Participación en la estructuración y monitoreo de costos, evaluando el ciclo completo del negocio (desde la compra de insumos hasta el pago a proveedores) para garantizar la rentabilidad y eficiencia de las operaciones.",
                "<b>Administración general:</b> Facturación de ventas, altas/bajas de productos y actualización de precios. Emisión de reportes solicitados por el área contable para liquidación de impuestos."
            ]
        },
        {
            role: "Administrador",
            company: "Andrea Franceschini SRL",
            dates: "Abr 2017 — Mar 2021",
            achievements: [
                "<b>Gestión de operaciones:</b> Gestión integral de operaciones administrativas y financieras vía ERP en fábrica bajo sistema de franquicias.",
                "<b>Ciclo administrativo:</b> Ciclo completo de compras, facturación, cuentas corrientes, cobranzas a franquiciados y seguimiento de contratos. Cobranzas y pagos a proveedores.",
                "<b>Gestión de RR.HH.:</b> Gestión de RR.HH. — CrossChex Cloud."
            ]
        }
    ],
    education: [
        "<b>Contador Público</b> — Facultad de Ciencias Económicas, UNC (Pendiente 7 materias)."
    ],
    skills: {
        management: ["XRP", "Tango gestión", "3C-WEB", "CrossChex Cloud"],
        dataAndDev: ["IA", "Power BI", "JavaScript", "React", "MySQL", "IDE (Cursor, VS Code, Antigravity)"]
    },
    certificates: [
        { name: "Analista de Datos", image: "images/certificados/AnalistaDatos.jpg" },
        { name: "Argentina Programa", image: "images/certificados/Argentina Programa.jpg" },
        { name: "Backend One", image: "images/certificados/BackendOne.jpeg" },
        { name: "FrontEnd", image: "images/certificados/FrontEnd.png" },
        { name: "FullStack A", image: "images/certificados/FullStackA.jpeg" },
        { name: "FullStack B", image: "images/certificados/FullStackB.jpg" },
        { name: "FullStack C", image: "images/certificados/FullStackC.jpg" },
        { name: "FullStack D", image: "images/certificados/FullStackD.jpg" }
    ],
    projects: [
        {
            title: "Erp Compras",
            description: "Prototipo ERP enfocado en la gestión de proveedores, compras de materias primas, inventarios y trazabilidad de materias primas.",
            techStack: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
            link: "https://luciano-veras.github.io/erp-compras/",
            repo: "https://github.com/Luciano-Veras/erp-compras",
            image: "images/erp-compras.png"
        },
        {
            title: "Catálogos Logísticos B2B",
            description: "Herramienta web ágil y minimalista, diseñada para conectar una base de datos local y visualizar su catálogo completo al instante, sin complicaciones",
            techStack: ["JavaScript", "Tailwind CSS", "FontAwesome", "SQLite WASM", "Google AI Studio", "Google Antigravity 2.0"],
            link: "https://luciano-veras.github.io/datos-logisticos/",
            repo: "https://github.com/Luciano-Veras/datos-logisticos",
            image: "images/catalogos-logisticos.png"
        },
        {
            title: "Gestor de Inventario & Análisis de Abastecimiento",
            description: "Dashboard analítico procesa reportes ERP (.xlsx / .csv) masivos en tiempo real. Clasifica automáticamente el inventario: previene roturas de stock críticas, detecta pedidos sugeridos y audita órdenes de compra en tránsito para evitar duplicaciones con proveedores.",
            techStack: ["React 19", "TypeScript", "Tailwind CSS v4", "Recharts", "SheetJS (XLSX)", "Lucide Icons", "Vite 6", "Google Antigravity 2.0"],
            link: "https://luciano-veras.github.io/GestorInventario/",
            repo: "https://github.com/Luciano-Veras/GestorInventario",
            image: "images/gestor-inventario.png"
        }
    ]
};
