export const monthOrder = {
    'SEPTIEMBRE': 1, 'OCTUBRE': 2, 'NOVIEMBRE': 3, 'DICIEMBRE': 4,
    'ENERO': 5, 'FEBRERO': 6, 'MARZO': 7, 'ABRIL': 8, 'MAYO': 9, 'JUNIO': 10, 'JULIO': 11, 'AGOSTO': 12
};

export function normalizeName(str) { 
    return String(str || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().replace(/\s+/g, " "); 
}

export function formatearFecha(f) {
    if (!f) return '';
    const parts = f.split('-');
    if (parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`;
    return f;
}

export function formatImporte(val) {
    if (val === null || val === undefined || val === '') return '0.00';
    const clean = String(val).replace(/[€\s]/g, '').replace(',', '.');
    const num = Number(clean);
    return isNaN(num) ? val : num.toFixed(2);
}

export function formatMesUnificado(mesStr) {
    if (!mesStr) return '-';
    let limpio = String(mesStr).toUpperCase().trim();
    let parts = limpio.replace(/'/g, '').split(' ');
    if (parts.length >= 2) {
        let mesUpper = parts[0];
        let mesCap = mesUpper.charAt(0) + mesUpper.slice(1).toLowerCase();
        let anioRaw = parts[parts.length - 1];
        let anioFull = anioRaw.length === 2 ? "20" + anioRaw : anioRaw;
        return `${mesCap} ${anioFull}`;
    }
    return limpio.charAt(0) + limpio.slice(1).toLowerCase();
}

export function parseMonthOrder(m_str) {
    const parts = m_str.replace(/'/g, "").trim().split(' ');
    if (parts.length >= 2) {
        const m_name = parts[0].toUpperCase();
        const y_raw = parts[1];
        const yearNum = Number("20" + (y_raw.length === 2 ? y_raw : y_raw.slice(-2)));
        const monthIdx = monthOrder[m_name] || 1;
        let startYear = (monthIdx >= 1 && monthIdx <= 4) ? yearNum : yearNum - 1;
        const cursoKey = `${startYear}/${startYear + 1}`;
        return { cursoKey, monthIdx };
    }
    return { cursoKey: '2025/2026', monthIdx: 1 };
}
