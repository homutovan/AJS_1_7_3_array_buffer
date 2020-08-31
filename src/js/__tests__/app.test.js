import ArrayBufferConverter, { getBuffer } from '../app';

const testCharacters = [
  "{'data: {'user: {'id: 1,'name:' Hitman, 'level': 10}}}",
  "{type: 'Magician', name: 'Merlin', range: -5, stoned: false, attack: 10}",
  "{type: 'Magician', name: 'Merlin', range: 0, stoned: false, attack: 10}",
  "{type: 'Magician', name: 'Merlin', range: 1, stoned: false, attack: 10}",
  "{type: 'Magician', name: 'Merlin', range: 6, stoned: false, attack: 5}",
  "{type: 'Magician', name: 'Merlin', range: 11, stoned: false, attack: 0}",
  "{type: 'Magician', name: 'Merlin', range: 15, stoned: false, attack: 0}",
  "{type: 'Magician', name: 'Merlin', range: -5, stoned: true, attack: 10}",
  "{type: 'Magician', name: 'Merlin', range: 0, stoned: true, attack: 10}",
  "{type: 'Magician', name: 'Merlin', range: 1, stoned: true, attack: 10}",
  "{type: 'Magician', name: 'Merlin', range: 2, stoned: true, attack: 4}",
  "{type: 'Magician', name: 'Merlin', range: 2, stoned: 'true', attack: 9}",
  "{type: 'Magician', name: 'Merlin', range: 6, stoned: true, attack: 0}",
  "{type: 'Magician', name: 'Merlin', range: 11, stoned: true, attack: 0}",
  "{type: 'Magician', name: 'Merlin', range: 15, stoned: true, attack: 0}",
  'Ну привет!',
  '',
  '[]',
  '{}',
];

test.each(testCharacters)(('Test case №%#: check convert ArrayBuffer from: %p'),
  (data) => {
    const buffer = getBuffer(data);
    ArrayBufferConverter.load(buffer);
    const received = ArrayBufferConverter.toString();
    expect(received).toBe(data);
  });
