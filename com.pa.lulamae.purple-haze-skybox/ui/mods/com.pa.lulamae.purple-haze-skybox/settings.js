try
{
    if (model && model.skyBoxes)
    {
        model.skyBoxes.push({text: 'Purple Haze by Lula Mae', value: '/pa/sky/terrain/textures/com.pa.lulamae.purple-haze-skybox/skybox.json'});
    }
}
catch (e)
{
    console.trace(e);
}