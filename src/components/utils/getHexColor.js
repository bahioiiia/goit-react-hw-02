export default function getHexColor(r, g, b) {
  const br  = 150;
  const sum = r + g + b;
  const soft = sum < 10 ? sum/10 : 1;

  if (sum === 0) {
      return '#000000';
  }

  // Відносні частки кольорів множимо на загальну яскравість та пом'якшувач :)
  const normalize = (component) => Math.round((component / sum) * br * soft);

  // Перетворюємо на HEX та об'єднуємо в кінцевий результат
  const toHex = (component) => normalize(component).toString(16).padStart(2, '0');

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}
