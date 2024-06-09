record_len = 10
import os
from bleak import BleakScanner
import asyncio
from PolarH10 import PolarH10


BASE_DIR = os.path.dirname(__file__)

async def main_stream(device_name):

    device = await BleakScanner.find_device_by_name(device_name)
    polar_device = PolarH10(device)
    await polar_device.connect()
    # await polar_device.get_device_info()
    # await polar_device.print_device_info()

    # await polar_device.start_acc_stream()
    await polar_device.start_hr_stream()
    # for i in tqdm(range(record_len), desc='Recording...'):
    while polar_device.bleak_client.is_connected:
        await asyncio.sleep(1)
        yield polar_device.ibi_stream_times[-1],  polar_device.ibi_stream_values[-1]

    # TODO find out an elegant way to stop
    # await polar_device.stop_acc_stream()
    await polar_device.stop_hr_stream()
    await polar_device.disconnect()

def entry_point(record_len):
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    ibi_data, _ = loop.run_until_complete(main_stream(record_len))
    return
    # breathing_analyser = BreathingAnalyser(acc_data, ibi_data)
    # breathing_analyser.show_breathing_signal()
    # breathing_analyser.show_heart_rate_variability()
    # return (acc_data, ibi_data)
    
