// list-models.js
const apiKey = 'AIzaSyDNRUxDNxdII_DN32WaK-o0DWiG8gh3p5k';

async function listModels() {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
    );
    
    const data = await response.json();
    
    console.log('\n📋 Available Models:\n');
    
    if (data.models) {
      data.models.forEach(model => {
        console.log('✅', model.name);
        console.log('   Supports:', model.supportedGenerationMethods);
        console.log('');
      });
    } else {
      console.log('❌ Error:', data);
    }
  } catch (error) {
    console.error('❌ Network error:', error);
  }
}

listModels();