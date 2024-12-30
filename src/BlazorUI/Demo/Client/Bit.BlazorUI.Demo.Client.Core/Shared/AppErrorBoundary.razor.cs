﻿namespace Bit.BlazorUI.Demo.Client.Core.Shared;

public partial class AppErrorBoundary
{
    private bool _showException;

    [AutoInject] private IExceptionHandler _exceptionHandler = default!;
    [AutoInject] private NavigationManager _navigationManager = default!;

#if DEBUG
    protected override void OnInitialized()
    {
        _showException = true;
    }
#endif

    protected override Task OnErrorAsync(Exception exception)
    {
        _exceptionHandler.Handle(exception);

        return Task.CompletedTask;
    }

    private void Refresh()
    {
        _navigationManager.Refresh(forceReload: true);
    }

    private void GoHome()
    {
        _navigationManager.NavigateTo("/", true);
    }
}
