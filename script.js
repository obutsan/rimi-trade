// Load spices from a mock JSON file and render them dynamically
document.addEventListener('DOMContentLoaded', async () => {
  const spicesContainer = document.getElementById('spices-container');

  // Fetch the mock JSON file
  const response = await fetch('spices.json');
  const spices = await response.json();

  // Render the spices as cards
  spices.forEach(spice => {
    const spiceCard = document.createElement('div');
    spiceCard.className = 'bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer';
    spiceCard.innerHTML = `
      <img src="${spice.img}" alt="${spice.title}" class="w-full h-40 object-cover">
      <div class="p-6">
        <h4 class="font-bold text-lg">${spice.title}</h4>
        <p class="text-gray-700 mt-2">${spice.description}</p>
        <p class="text-yellow-600 font-bold mt-4">${spice.price}</p>
      </div>
    `;
    spiceCard.onclick = () => showDetails(spice);
    spicesContainer.appendChild(spiceCard);
  });
});

// Show modal with details of the selected spice
function showDetails(spice) {
  const modal = document.getElementById('modal');
  const title = document.getElementById('modal-title');
  const content = document.getElementById('modal-content');

  title.textContent = spice.title;
  content.textContent = `${spice.description} Price: ${spice.price}`;

  modal.classList.remove('hidden');
}

// Close the modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
}

  